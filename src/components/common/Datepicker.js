import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="dp">
      <label htmlFor="">Select Date</label>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        inline
      />
    </div>
  );
}
