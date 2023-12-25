export function formatDate(dateType: string, locale = "") {
    const date = new Date(dateType);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    return date.toLocaleDateString(locale, options);
  }