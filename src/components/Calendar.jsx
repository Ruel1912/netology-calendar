import PropTypes from 'prop-types'
import WeekDays from './WeekDays';
import { capitalizeFirstLetter } from '../helpers/helpers';
import CalendarNumbers from './CalendarNumbers';

const Calendar = ({ date }) => {

  Calendar.propTypes = {
    date: PropTypes.instanceOf(Date)
  }

  const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];

  const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="ui-datepicker">

      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{capitalizeFirstLetter(dayOfWeek)}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{month}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.toLocaleDateString('ru-RU', { month: 'long' })}</span>
          &nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>

      <table className="ui-datepicker-calendar">
        
        <WeekDays currentYear={year} />
        
        <CalendarNumbers date={date} />
      </table>
    </div>
  )
}

export default Calendar