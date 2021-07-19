import React from 'react'
import './CustomCheckboxStyles.scss';
const CustomCheckbox = ({labelState, setLabelState, labelText, labelId}) => {
    return (
        <div className="checkbox-custom">
            <input type="checkbox" id={labelId} onChange={e => setLabelState(e.currentTarget.checked)} checked={labelState}/>
            <label htmlFor={labelId}>{labelText}</label>
        </div>
    )
}

export default CustomCheckbox
