import React from 'react'
import "./NewsCardStyles.scss"
const NewsCard = ({post, classAddin}) => {
    return (
        <div className={`news-card ${classAddin}`}>
          <div className="news-card__content">
            <span className="news-card__content-tag tag">{post.type}</span>
            <div className="news-card__content-imageBox">
              <img
                src={post.imageLink}
                alt={post.title}
              />
            </div>
            <div className="news-card__content-text">
              <div className="news-card__content-text-header">
                <h2>{post.title}</h2>
              </div>
              <div className="news-card__content-text-description">
                <p>
                  {post.shortDescription}
                </p>
              </div>
            </div>
            <div className="news-card__content-footer">
              <div className="news-card__content-footer-author">
                <img src={post.author.user.imageLink || window.$fallbackLogo} alt={'club brand'} />
                <div className="name">
                  <span className="author">{post.author.user.full_name}</span>
                  <span className="function">{post.author.user.occupation}</span>
                </div>
              </div>
              <div className="news-card__content-footer-date">
                <span className="timeSince">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default NewsCard
