const MONTHS_FULL = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MONTHS_SHORT = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DATE_FORMAT = {
    // Days

    // Day of the month, 2 digits with leading zeros
    'd': (Y, M, D, H, I, S) => (+D).toString().padStart(2, '0'),

    // Months

    //Numeric representation of a month, with leading zeros
    'm': (Y, M, D, H, I, S) => (+M).toString().padStart(2, '0'),

    // A short textual representation of a month, three letters
    'M': (Y, M, D, H, I, S) => MONTHS_SHORT[+M],

    // A full textual representation of a month, such as January or March
    'F': (Y, M, D, H, I, S) => MONTHS_FULL[+M],

    // Years

    // A full numeric representation of a year, 4 digits
    'Y': (Y, M, D, H, I, S) => +Y,
};

export default class DateTime {

    /**
     * @param {string|null} date
     */
    constructor(date = null) {
        if (date) {
            this.parseDate(date);
        } else {
            let NowDate = new Date();
            this.Y = NowDate.getFullYear();
            this.M = NowDate.getMonth() + 1;
            this.D = NowDate.getDate();
            this.H = NowDate.getHours();
            this.I = NowDate.getMinutes();
            this.S = NowDate.getSeconds();
        }
    }

    /**
     * @param {string} date
     * @return {DateTime}
     */
    parseDate(date) {
        let m = date.match(
            /^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2})(?: +(\d{1,2})(?::(\d{1,2})(?::(\d{1,2}))?)?)?)?)?$/
        );

        this.Y = this._getM(m, 1);
        this.M = this._getM(m, 2);
        this.D = this._getM(m, 3);
        this.H = this._getM(m, 4);
        this.I = this._getM(m, 5);
        this.S = this._getM(m, 6);
    }

    /**
     * @param {array|null} m
     * @param {number} i
     * @return {null|number}
     * @private
     */
    _getM(m, i) {
        if (!m) {
            return null;
        }
        if (typeof(m[i]) !== 'string') {
            return null;
        }
        return parseInt(m[i], 10);
    }

    /**
     * @param {string} format
     * @return {string}
     */
    getFormatDate(format = '%d %F %Y') {
        return format.replace(
            /%(\w)/g,
            (m, f) => {
                const fun = DATE_FORMAT[f] || null;
                if (!fun) {
                    return m;
                }
                return fun(this.Y, this.M, this.D, this.H, this.I, this.S);
            }
        );
    }

    /**
     * @return {Date}
     */
    getDate() {
        return new Date(this.Y || 0, (this.M - 1) || 0, this.D || 0, this.H || 0, this.I || 0, this.S || 0);
    }

    /**
     * @param {DateTime|null} DateTime2
     * @return {Date}
     */
    getDiffDate(DateTime2 = null) {
        if (!DateTime2) {
            DateTime2 = new DateTime();
        }
        let diff = Math.abs(this.getDate().getTime() - DateTime2.getDate().getTime())
        return new Date(diff);
    }

    /**
     * @param {DateTime|null} DateTime2
     * @param {boolean} $withMonths
     * @return {Date}
     */
    getPeriod(DateTime2 = null, $withMonths = true) {
        let DiffDate = this.getDiffDate(DateTime2);
        let period = [];

        let years = DiffDate.getFullYear() - 1970;
        if (years) {
            period.push(years + ' year' + (years > 1 ? 's' : ''));
        }

        if ($withMonths) {
            let months = DiffDate.getMonth();
            let days = DiffDate.getDate();
            if (days >= 29) {
                months += 1;
            }
            if (months) {
                period.push(months + ' month' + (months > 1 ? 's' : ''));
            }
        }

        return period.join(' ');
    }
}
