import React from "react";
import { getDaysInMonth } from "date-fns";
import { getYears, months } from "../../utils/helpers";
import "./DateEntryStyles.scss";
const DateEntry = ({
  labelName,
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear
}) => {
  const daysInMonth = getDaysInMonth(new Date(year, month - 1));
  const daysCount = Array(daysInMonth).keys();
  const days = [];
  for (const index of daysCount) {
    days.push(index + 1);
  }

  return (
    <div className="form-group">
      <label htmlFor="day-date">
        {labelName}
      </label>
      <div className="form-group-date">
        <div className="select-wrap">
          <select
            value={day}
            id="day-date"
            name="day-date"
            min="01"
            max="31"
            placeholder="DD"
            required
            className="date-input"
            onChange={e => {
              setDay(e.target.value);
            }}
          >
            {days.map(item =>
              <option key={item} value={item}>
                {item}
              </option>
            )}
          </select>
        </div>
        <div className="select-wrap">
          <select
            value={month}
            id="month-date"
            name="month-date"
            min="01"
            max="31"
            placeholder="MM"
            required
            className="date-input"
            onChange={e => {
              setMonth(e.target.value);
            }}
          >
            {months.map((item, index) =>
              <option key={index + 1} value={index}>
                {item}
              </option>
            )}
          </select>
        </div>
        <div className="select-wrap">
          <select
            value={year}
            id="year-date"
            name="year-date"
            placeholder="YYYY"
            required
            className="date-input"
            onChange={e => {
              setYear(e.target.value);
            }}
          >
            {getYears(1960).map(item =>
              <option key={item} value={item}>
                {item}
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DateEntry;
