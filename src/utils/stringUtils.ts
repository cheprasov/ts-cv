import DateTime from '../date/DateTime';

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

export const replaceVars = (str: string): string => {
    const regExp = /\{\{(\w+):([^}]+)\}\}/gi;
    const vars = str.match(regExp);
    if (!vars) {
        return str;
    }
    return vars.reduce((result, variable) => {
        const [type, value] = variable.slice(2, -2).split(':');
        switch (type) {
            case 'years_count':
                const period = (new DateTime()).getPeriod(new DateTime(value), false);
                return str.replace(variable, period);
                break;
            default:
                return str;
        }
        return result;
    }, str);
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
