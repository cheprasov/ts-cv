import DateTime from '../date/DateTime';

export const getPeriod = (begDate: string, endDate: string, withPeriod: boolean = false): string => {
    const dateTime1 = new DateTime(begDate);
    const date1 = dateTime1.getFormatDate('%F %Y');

    let dateTime2: DateTime;
    let date2: string = '';

    if (endDate === 'now') {
        dateTime2 = new DateTime();
        date2 = 'Present';
    } else {
        dateTime2 = new DateTime(endDate);
        date2 = dateTime2.getFormatDate('%F %Y');
    }

    let period = '';

    if (withPeriod) {
        period = ` (${dateTime1.getPeriod(dateTime2)})`;
    }

    return `${date1} – ${date2}${period}`;
};
