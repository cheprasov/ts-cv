export default class StringUtils {

    static markLink(text) {
        return text.replace(
            /(http(s)?:\/\/\S+)/g,
            (m) => {
                return `<a href="${m}" target="_blank">${m}</a>`;
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
}
