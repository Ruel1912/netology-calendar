import { capitalizeFirstLetter } from '../helpers/helpers';

const WeekDays = () => {

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const newDate = new Date(2024, 0, 1 + i); // Устанавливаем на 3 января для правильного отображения
    const dayOfWeek = (newDate.getDay()) % 7; // Сдвигаем, чтобы понедельник был первым

    return {
      short: newDate.toLocaleDateString('ru-RU', { weekday: 'short' }),
      full: newDate.toLocaleDateString('ru-RU', { weekday: 'long' }),
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6 ? 'ui-datepicker-week-end' : '',
    };
  });

  return (
    <thead>
      <tr>
        {daysOfWeek.map(({ short, full, isWeekend }, index) => (
          <th key={`dow-${index}`} scope="col" title={full} className={isWeekend}>
            {capitalizeFirstLetter(short)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default WeekDays;
