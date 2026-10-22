---
title: 堆题中的Use After Free漏洞
tags:
  - CTF
  - PWN
  - heap
  - uaf
draft: true
comment: true
description: 这篇文章主要用于堆题中的经典漏洞UAF的讲解
author: Liksy_0
---
unsorted bin 中空闲块的 `fd` 和 `bk` 指针会指向 libc 地址，**核心原因在于 glibc 管理 unsorted bin 的方式：它是一个带有固定“头节点”的双向链表，而这个头节点就位于 libc 的 `main_arena` 结构体中。**

### 🏛️ Unsorted Bin 的管理结构：`main_arena`

在 glibc 的 `malloc` 实现中，每个线程的分配区（Arena）都由一个 `malloc_state` 结构体管理，主线程对应的这个结构体就是 `main_arena`。

`main_arena` 内部包含一个 `bins` 数组，用于存放各类 bin 的链表头。**unsorted bin 就是这些 bin 中的一种**，其链表头也存储在 `main_arena` 之中。

### 🔗 双向链表与“头节点”的特性

unsorted bin 被实现为一个**双向链表**（doubly-linked list）。作为一个双向链表，它通常有一个**不用于分配内存的“头节点”**（head node）来作为链表的起点和终点，方便进行插入和删除操作。

当一个空闲块（chunk）被放入 unsorted bin 时，其内部的 `fd` 和 `bk` 指针就需要根据链表的结构进行设置：

- **`fd` (forward pointer)**：指向链表中的下一个块。
    
- **`bk` (backward pointer)**：指向链表中的上一个块。
    

### 🎯 为什么指针会指向 libc 地址？

当 unsorted bin 中**只有一个空闲块**时，这个块既是链表的第一个元素，也是最后一个元素。

此时，这个空闲块的：

- `fd` 指针需要指向它的“下一个”块，但后面没有其他块了，所以它指回了链表的**头节点**。
    
- `bk` 指针需要指向它的“上一个”块，但前面也没有其他块了，所以它也指回了链表的**头节点**。
    

而这个链表的**头节点**，正是位于 `main_arena` 结构体中的一个字段。由于 `main_arena` 是 libc 库的一部分，其地址自然就是一个 **libc 地址**。因此，这个空闲块的 `fd` 和 `bk` 指针就被设置成了指向 `main_arena` 内部的某个地址，从而表现为一个 libc 地址。

这个指向 `main_arena` 内部的特定地址通常是 **`main_arena + 88`**（在64位系统上），这个偏移量是 `main_arena` 结构体中 `bins` 数组的起始地址。



文件链接
1.
patchelf --set-rpath /home/liksy/PWN/glibc-all-in-one/libs/2.23-0ubuntu11.3_amd64/x86_64-linux-gnu pwn1_patched
2.
patchelf --set-interpreter /home/liksy/PWN/glibc-all-in-one/libs/2.23-0ubuntu11.3_amd64/x86_64-linux-gnu/ld-2.23.so ./pwn1_patched

计算基址
pwndbg> p/x 0x795215dc4b78 - 0x795215a00000
$1 = 0x3c4b78