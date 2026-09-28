import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from 'date-fns';
import { range } from 'lodash';
const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
// PAŽNJA: Funkcija 'range' i 'DateFNS' (treba 'date-fns') moraju biti uvezeni ili definisani.
// Ako pretpostavimo da je 'range' dostupan:
const years = range(1990, getYear(new Date()) + 1, 1);


const CustomHeader = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
    <div style={{ margin: 10, display: "flex", justifyContent: "center", }}>
        {/* type="button" so these don't submit the form the picker is in */}
        <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
        <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(+value)}
        >
            {years.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <select
            value={MONTHS[getMonth(date)]}
            onChange={({ target: { value } }) => changeMonth(MONTHS.indexOf(value))}
        >
            {MONTHS.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{">"}</button>
    </div>
);
export const CustomDatePicker = ({ selected, onChange, ...rest }) => {
    return (
        <DatePicker
            renderCustomHeader={CustomHeader}
            selected={selected}
            onChange={onChange}
            {...rest}
        />
    );
};