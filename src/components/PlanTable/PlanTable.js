import React from 'react'
import "./PlanTableStyles.scss"
const PlanTable = ({PlanTitle, price, show, plan, children}) => {
    console.log(show)
    return (
        <div className={`si-planTable ${show && 'show'}`}>
            <div className="si-planTable__content">
                <h1 className={`plan-title ${plan && plan}`}>{PlanTitle}<span>{price}</span></h1>
                <div className="si-planTable__table">
                    <ul className="si-planTable__table-list">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlanTable
