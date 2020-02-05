import React from 'react';
import './styles.scss';

import DaySchedule from '../DaySchedule';

interface WeekScheduleProps {
  data: Date[];
  className?: string;
}

const getAvailableWeekDays = (id: number) => {
  return [0, 5, 6];
};

const getAvailableShifts = (id: number) => {
  return [0, 1];
};

const WeekSchedule: React.SFC<WeekScheduleProps> = ({ className, data }) => {
  const availableWeekDays = getAvailableWeekDays(0);
  const availableShifts = getAvailableShifts(0);

  return (
    <div className={`week-schedule ${className || ''}`}>
      {data.map((day: Date) => (
        <DaySchedule key={`day-${+day}`} date={day} {...{ availableWeekDays, availableShifts }} />
      ))}
    </div>
  );
};

export default WeekSchedule;
