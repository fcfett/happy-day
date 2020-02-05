interface Object {
  [key: string]: any;
}

const daysOfTheWeek: Object = {
  pt: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

const months: Object = {
  pt: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const isoDateRgx = /((\d{4})-(\d{2})-(\d{2})).*/; // $1: YYYY-MM-DD; $2: YYYY, $3: MM; $4: DD

export const getMonth = (date: Date, locale = 'pt') => months[locale][+date.getMonth()];

export const getWeekDay = (date: Date, locale = 'pt') => daysOfTheWeek[locale][+date.getDay()];

export const getDayNumber = (date: Date) => date.toISOString().replace(isoDateRgx, '$4');

export const getDateString = (date: Date) => date.toISOString().replace(isoDateRgx, '$1');

export default {
  getMonth,
  getWeekDay,
  getDayNumber,
  getDateString,
};
