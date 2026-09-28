// Turns a flag emoji (🇸🇪) back into its country code ("se").
// Opposite of convertToEmoji.
export function emojiToCountryCode(emoji) {
    const code = [...(emoji || "")]
        .map((char) => String.fromCharCode(char.codePointAt(0) - 127397))
        .join("")
        .toLowerCase();
    return /^[a-z]{2}$/.test(code) ? code : null;
}

// Windows doesn't render flag emojis (it shows "SE" instead of 🇸🇪),
// so flags are shown as images from flagcdn.com.
export function flagUrl(emoji) {
    const code = emojiToCountryCode(emoji);
    return code ? `https://flagcdn.com/w80/${code}.png` : null;
}
