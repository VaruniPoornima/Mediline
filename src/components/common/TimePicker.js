import React from 'react'

export default function TimePicker() {
  return (
    <div>
      <label>Select Time</label>
      <ul className='tp'>
        <li>
          <div className="time-wrap">
          08:00 AM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          08:30 AM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          09:00 AM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          09:30 AM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          12:00 PM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          12:30 PM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          13:00 PM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          13:30 PM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          14:00 PM
          </div>
        </li>
        <li>
          <div className="time-wrap">
          14:30 PM
          </div>
        </li>
      </ul>
    </div>
  )
}
