export function formatDate(date) {
    if (!date) return "No date available";
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}
