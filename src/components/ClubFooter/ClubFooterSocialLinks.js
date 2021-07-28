import React from 'react'

const ClubFooterSocialLinks = ({icon, linkProps}) => {
    return (
        <a href="/" {...linkProps}>
            {icon}
        </a>
    )
}

export default ClubFooterSocialLinks
