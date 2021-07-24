import React from 'react'

const BasicTabContent = ({linkedTo, children}) => {
    return (
        <div id={linkedTo} className="tabcontent">
            {children}
        </div>
    )
}

export default BasicTabContent
