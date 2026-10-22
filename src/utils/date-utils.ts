import { siteConfig } from "../config";

// 语言代码映射
const DATE_LOCALE_MAP: Record<string, string> = {
	zh_CN: "zh-CN",
	zh_TW: "zh-TW",
	en: "en-US",
	ja: "ja-JP",
	ko: "ko-KR",
	es: "es-ES",
	th: "th-TH",
	vi: "vi-VN",
	tr: "tr-TR",
	id: "id-ID",
	fr: "fr-FR",
	de: "de-DE",
	ru: "ru-RU",
	ar: "ar-SA",
};

function resolveDateLocale(lang: string): string {
	return DATE_LOCALE_MAP[lang] || "en-US";
}

export function formatDateToYYYYMMDD(date: Date): string {
	return date.toISOString().substring(0, 10);
}

// 国际化日期格式化函数
export function formatDateI18n(
	dateInput: Date | string,
	includeTime?: boolean,
): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const lang = siteConfig.lang || "en";

	// 根据语言设置不同的日期格式
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	if (includeTime) {
		options.hour = "2-digit";
		options.minute = "2-digit";
		options.second = "2-digit";
	}

	// 如果配置了时区，则将其用于格式化（IANA 时区字符串）
	if (siteConfig.timezone) {
		(options as Intl.DateTimeFormatOptions).timeZone = siteConfig.timezone;
	}

	const locale = resolveDateLocale(lang);
	return includeTime
		? date.toLocaleString(locale, options)
		: date.toLocaleDateString(locale, options);
}

// 国际化日期时间格式化函数（带时分秒）
export function formatDateI18nWithTime(dateInput: Date | string): string {
	return formatDateI18n(dateInput, true);
}

export function formatDynamicDate(dateInput: Date | string): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const parts = new Intl.DateTimeFormat("en-CA", {
		timeZone: "UTC",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23",
	}).formatToParts(date);
	const get = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((part) => part.type === type)?.value || "";
	return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

// 动态时间展示：只显示月日（如「10月18日」），完整时间通过 title 属性提示
export function formatDynamicDisplayDate(dateInput: Date | string): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	return new Intl.DateTimeFormat(resolveDateLocale(siteConfig.lang || "en"), {
		timeZone: "UTC",
		month: "long",
		day: "numeric",
	}).format(date);
}

export function formatTimezoneOffset(
	timezone: string,
	dateInput: Date | string,
): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const timezoneName = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		timeZoneName: "longOffset",
	})
		.formatToParts(date)
		.find((part) => part.type === "timeZoneName")?.value;

	if (!timezoneName || timezoneName === "GMT") return "UTC";

	return timezoneName
		.replace("GMT", "UTC")
		.replace(/([+-])0(\d)/, "$1$2")
		.replace(":00", "");
}

// 统一格式为 YYYY-MM-DD HH:mm，支持站点时区
export function formatDateTimeToYYYYMMDDHHmm(dateInput: Date | string): string {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	if (siteConfig.timezone) {
		options.timeZone = siteConfig.timezone;
	}

	const parts = new Intl.DateTimeFormat("en-CA", options).formatToParts(date);
	const get = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((p) => p.type === type)?.value || "";

	return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}`;
}
