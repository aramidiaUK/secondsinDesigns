import React from 'react'

const ClubFooterLinksGroupItem = ({linkTo, linkName}) => {
    return (
        <li className="footer-links-content-group-item">
            <a href={linkTo || '/'}>{linkName}</a>
        </li>
    )
}

export default ClubFooterLinksGroupItem
