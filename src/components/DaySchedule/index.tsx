import React from 'react';
import './styles.scss';

import { getWeekDay, getDayNumber, getDateString } from '../../utils/helpers';

interface DayScheduleProps {
  date: Date;
  availableWeekDays: number[];
  availableShifts: number[];
}

const checkAvailability = (date: Date, availableWeekDays: number[], availableShifts: number[]) => {
  return (shift: number) => availableWeekDays.includes(date.getDay()) && availableShifts.includes(shift);
};

const renderShift = (key: string, shift: number, title: string, checkShiftAvailability: Function) => {
  const isAvailable = checkShiftAvailability(shift);
  const text = isAvailable ? title : 'Não disponível';
  return (
    <li key={key} className={!isAvailable ? 'unavailable' : ''} title={text}>
      <span>{text}</span>
    </li>
  );
};

const DaySchedule: React.SFC<DayScheduleProps> = ({ date, availableWeekDays, availableShifts }) => {
  const checkShiftAvailability = checkAvailability(date, availableWeekDays, availableShifts);
  const dateString = getDateString(date);

  return (
    <div className="day-schedule">
      <header>
        <h1>{getDayNumber(date)}</h1>
        <h2>{getWeekDay(date)}</h2>
      </header>
      <ul>
        {['Manhã', 'Tarde', 'Noite'].map((title, shift) =>
          renderShift(`${dateString}-${shift}`, shift, title, checkShiftAvailability),
        )}
      </ul>
    </div>
  );
};

export default DaySchedule;
