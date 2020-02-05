import React from 'react';
import './styles.scss';

import WeekSchedule from '../WeekSchedule';
import { getMonth } from '../../utils/helpers';

const renderWeekArray = (from: Date) => {
  from.setHours(0, 0, 0, 0);
  const datesArray = [];

  for (let i = 0; i < 7; i++) {
    const currentDay: number = i - from.getDay();
    const currentDate: Date = new Date(+from);
    currentDate.setHours(24 * currentDay);
    datesArray[i] = currentDate;
  }

  return datesArray;
};

const Calendar: React.SFC = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const oneWeekBehind = new Date(+today);
  oneWeekBehind.setHours(24 * -7);

  const oneWeekAhead = new Date(+today);
  oneWeekAhead.setHours(24 * 7);

  return (
    <section className="calendar">
      <header>
        <h1>{getMonth(today)}</h1>
        <aside>
          <button>Novo Evento</button>
        </aside>
      </header>
      <main>
        <WeekSchedule data={renderWeekArray(oneWeekBehind)} />
        <WeekSchedule className="current" data={renderWeekArray(today)} />
        <WeekSchedule data={renderWeekArray(oneWeekAhead)} />
      </main>
    </section>
  );
};

export default Calendar;
