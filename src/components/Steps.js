import React from 'react'

export default function Steps() {
  return (
    <div className="steps">
        <ul>
          <li>
            <div className="steps-list__group active">
              <span>1</span>
              <p>Book your Appointment</p>
            </div>
          </li>
          <li>
            <div className="steps-list__group">
              <span>2</span>
              <p>Your Information</p>
            </div>
          </li>
          <li>
            <div className="steps-list__group">
              <span>3</span>
              <p>Make Payment</p>
            </div>
          </li>
        </ul>
      </div>
  )
}
