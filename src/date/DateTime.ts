import { padStart } from '../utils/stringUtils';

const MONTHS_FULL = [
    '',
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December',
];

const MONTHS_SHORT = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DATE_FORMAT: { [key: string]: (Y: number, M: number, D: number, H: number, I: number, S: number) => string } = {
    // Days

    // Day of the month, 2 digits with leading zeros
    d: (Y: number, M: number, D: number): string => padStart((+D).toString(), 2, '0'),

    // Months

    // Numeric representation of a month, with leading zeros
    m: (Y: number, M: number): string => padStart((+M).toString(), 2, '0'),

    // A short textual representation of a month, three letters
    M: (Y: number, M: number): string => MONTHS_SHORT[+M] || '',

    // A full textual representation of a month, such as January or March
    F: (Y: number, M: number): string => MONTHS_FULL[+M] || '',

    // Years

    // A full numeric representation of a year, 4 digits
    Y: (Y: number): string => `${+Y}`,
};

export default class DateTime {

    private _y: number = 0;
    private _m: number = 0;
    private _d: number = 0;
    private _h: number = 0;
    private _i: number = 0;
    private _s: number = 0;

    /**
     * @param {string|null} date
     */
    constructor(date: string | null = null) {
        if (date) {
            this.parseDate(date);
        } else {
            const nowDate = new Date();
            this._y = nowDate.getFullYear();
            this._m = nowDate.getMonth() + 1;
            this._d = nowDate.getDate();
            this._h = nowDate.getHours();
            this._i = nowDate.getMinutes();
            this._s = nowDate.getSeconds();
        }
    }

    parseDate(date: string) {
        const m = date.match(
            /^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2})(?: +(\d{1,2})(?::(\d{1,2})(?::(\d{1,2}))?)?)?)?)?$/
        );

        if (!m) {
            return;
        }

        this._y = this.getM(m, 1) || 0;
        this._m = this.getM(m, 2) || 0;
        this._d = this.getM(m, 3) || 0;
        this._h = this.getM(m, 4) || 0;
        this._i = this.getM(m, 5) || 0;
        this._s = this.getM(m, 6) || 0;
    }

    private getM(m: string[], i: number): number | null {
        if (!m) {
            return null;
        }
        if (typeof (m[i]) !== 'string') {
            return null;
        }
        return parseInt(m[i], 10);
    }

    getFormatDate(format = '%d %F %Y'): string {
        return format.replace(/%(\w)/g, (m, f) => {
            const fun = DATE_FORMAT[f] || null;
            if (!fun) {
                return m;
            }
            return fun(this._y, this._m, this._d, this._h, this._i, this._s);
        });
    }

    createDate(): Date {
        return new Date(this._y, (this._m - 1), this._d, this._h, this._i, this._s);
    }

    getDiffDate(dateTime: DateTime = new DateTime()): Date {
        const diff = Math.abs(this.createDate().getTime() - dateTime.createDate().getTime());
        return new Date(diff);
    }

    getPeriod(dateTime?: DateTime, withMonths = true): string {
        const diffDate = this.getDiffDate(dateTime);
        const period = [];

        const years = diffDate.getFullYear() - 1970;
        if (years) {
            period.push(`${years} year${years > 1 ? 's' : ''}`);
        }

        if (withMonths) {
            let months = diffDate.getMonth();
            const days = diffDate.getDate();
            if (days >= 14) {
                months += 1;
            }
            if (months) {
                period.push(`${months} month${(months > 1 ? 's' : '')}`);
            } else if (!years) {
                if (days) {
                    period.push(`less than a month`);
                }
            }
        }

        return period.join(' ');
    }

    toISOString(): string {
        return this.createDate().toISOString();
    }

}
