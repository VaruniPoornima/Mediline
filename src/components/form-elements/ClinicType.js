import React from 'react'
import clinic from '../../img/clinic.svg'
import com from '../../img/com.svg'

export default function ClinicType() {
  return (
    <div className='ct'>
        <label>Clinic Type</label>
        <div className="btn-group">
            <div className="btn phy active">
                <img src={clinic} alt="" />
                <span>Physical</span>
            </div>
            <div className="btn online">
                <img src={com} alt="" />
                <span>Online</span>
            </div>
        </div>
        </div>
  )
}
