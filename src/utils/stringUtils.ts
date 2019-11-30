
export const markLink = (text: string, len: number = 60): string => {
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
};

export const nl2br = (text: string): string => {
    return text.replace(/\n/g, '<br />');
};

export const prepare = (lines: string | string[]): string => {
    let result: string[] = [];
    if (!Array.isArray(lines)) {
        lines = [lines];
    }
    lines.forEach(
        (line) => {
            line = markLink(line);
            line = nl2br(line);
            result.push(line);
        },
    );
    return result.join('<br />');
};

export const padStart = (text: string, len: number, s = '0'): string => {
    if (text.length >= len) {
        return text;
    }
    while (text.length < len) {
        text = s + text;
    }
    return text;
};

export const upperCaseFirst = (str: string): string => {
    return str[0].toUpperCase() + str.slice(1);
};

export const getUrlWithoutScheme = (url: string): string => {
    return url.replace(/^http(s?):\/\//, '');
};

export const isUrl = (url: string): boolean => {
    // quick check, do not use regexp
    if (
        (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0)
        || url.indexOf(' ') !== -1
    ) {
        return false;
    }
    return true;
};

export const isEmail = (email: string): boolean => {
    // quick check, do not use regexp
    const atPos = email.indexOf('@');
    const lastAtPost = email.lastIndexOf('@');
    if (atPos !== lastAtPost || atPos < 1 || atPos > email.length - 4) {
        return false;
    }
    if (email.indexOf(' ') !== -1) {
        return false;
    }
    return true;
};

export const isString = (value: any): value is string => typeof value === 'string';
