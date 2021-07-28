import React from 'react'

const ClubSubscribePanel = ({clubName}) => {
    return (
        <div className="subscribe-panel">
        <div className="subscribe-panel-content">
          <div className="caption">
            <h1>
              <span>Subscribe to</span>{clubName}
            </h1>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    )
}

export default ClubSubscribePanel
