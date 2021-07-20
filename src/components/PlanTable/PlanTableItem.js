import React from 'react'

const PlanTableItem = ({planName, planDescription, status}) => {
    return (
        <li>
            <div className="plan-name">{planName}</div>
            <div className="plan-description">{planDescription}</div>
            { status ? <i class="bx bx-check" /> :  <i class='bx bx-x' ></i> }
        </li>
    )
}

export default PlanTableItem
