export default class StringUtils {

    static markLink(text, len = 60) {
        return text.replace(
            /(http(s)?:\/\/\S+)/g,
            (m) => {
                let l = m;
                if (len && l.length > len) {
                    l = l.substr(0, len) + '...';
                }
                return `<a href="${m}" target="_blank">${l}</a>`;
            }
        );
    }

    static nl2br(text) {
        return text.replace(/\n/g, '<br />');
    }

    static prepare(lines) {
        let result = [];
        if (!Array.isArray(lines)) {
            lines = [lines];
        }
        lines.forEach(
            (line) => {
                line = StringUtils.markLink(line);
                line = StringUtils.nl2br(line);
                result.push(line);
            }
        );
        return result.join("<br />");
    }

    static padStart(text, len, s = '0') {
        if (text.length >= len) {
            return text;
        }
        while (text.length < len) {
            text = s + text;
        }
        return text;
    }
}
