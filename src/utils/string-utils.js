export default class StringUtils {

    static markLink(text) {
        return text.replace(
            /(http(s)?:\/\/\S+)/g,
            (m) => {
                let l = m;
                if (l.length > 40) {
                    l = l.substr(0, 40) + '...';
                }
                return `<a href="${m}" target="_blank">${l}</a>`;
            }
        );
    }

    static nl2br(text) {
        return text.replace(/\n/g, '<br />');
    }

    static prepare(text) {
        text = StringUtils.markLink(text);
        text = StringUtils.nl2br(text);
        return text;
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
