import PropTypes from 'prop-types';

const CalendarNumbers = ({ date }) => {
  CalendarNumbers.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };

  const generateCalendarNumbers = () => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const startDay = firstDayOfMonth.getDay() - 1;
    const daysInMonth = lastDayOfMonth.getDate();

    const daysArray = Array.from({ length: 5 * 7 }, (_, index) => {
      let className = '';
      let day;

      if (index < startDay) {
        // Дни предыдущего месяца
        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
        day = prevMonthLastDay - (startDay - 1 - index);
        className = 'ui-datepicker-other-month';
      } else if (index < startDay + daysInMonth) {
        // Дни текущего месяца
        day = index - startDay + 1;
        if (date.getDate() === day && date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
          className = 'ui-datepicker-today';
        }
      } else {
        // Дни следующего месяца
        day = index - (startDay + daysInMonth) + 1;
        className = 'ui-datepicker-other-month';
      }

      return { day, className };
    });

    return daysArray;
  };

  const daysArray = generateCalendarNumbers();
  const weeksArray = [];

  for (let i = 0; i < daysArray.length; i += 7) {
    weeksArray.push(daysArray.slice(i, i + 7));
  }

  return (
    <tbody>
      {weeksArray.map((week, weekIndex) => (
        <tr key={`week-${weekIndex}`}>
          {week.map(({ day, className }, dayIndex) => (
            <td key={`day-${dayIndex}`} className={className}>
              {day}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarNumbers;
