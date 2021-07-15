import React, { useState } from "react";
import ChatBox from "./ChatBox";

const Comment = ({
  imageLink,
  name,
  joinedTime,
  content,
  likesCount,
  repliesCount,
  replyId,
}) => {
  const [commentState, setCommentState] = useState("");

  const showReplyBox = e => {
    const replyBoxToShow = document.querySelector(
      `[data-comment='${replyId}']`
    );

    if (replyBoxToShow.classList.contains("active")) {
      replyBoxToShow.classList.remove("active");
      return;
    }

    replyBoxToShow.classList.toggle("active");
  };

  const showOptions = e => {
      const menuToShow = e.currentTarget.closest('.comment-opt');
      menuToShow.classList.toggle('active');
  }

  return (
    <div className="comments-comment">
      <div className="profile-menu">
        <div className="profile-menu-imageName">
          <div className="imgBox">
            <img src={imageLink} alt={name} />
          </div>
          <p>
            {name}
            <span className="sub-text">
              Over {joinedTime}
            </span>
          </p>
        </div>
        <div className="comment-opt">
          <button className="menu-icon" onClick={showOptions}>
            <i class="bx bx-dots-horizontal-rounded" />
          </button>
          <span className="comment-opt-menu">
              <button type="button">Report Repsonse</button>
          </span>
        </div>
      </div>
      <div className="comments-comment-content">
        <p>
          {content}
        </p>
      </div>
      <div className="comment-reaction">
        <div className="comment-reaction-icons">
          <div className="reaction-icons icon-likes">
            <i class="bx bx-happy-alt" />
            <span className="counter">
              {likesCount}
            </span>
          </div>
          <div className="reaction-icons icon-responses">
            <i class="bx bx-message-rounded" />
            <span className="text">
              <span className="counter">{repliesCount}</span>&nbsp;replies
            </span>
          </div>
        </div>
        <button
          type="button"
          className="comment-replyBtn"
          onClick={showReplyBox}
        >
          Reply
        </button>
      </div>
      <div data-comment={replyId} className="reply-section chat-body">
        <ChatBox
          commentState={commentState}
          setCommentState={setCommentState}
          name={"Henry Akinola"}
          imageLink={`https://miro.medium.com/fit/c/32/32/0*pkblqPPQSeVXAKyO`}
          onsubmit={e => {
            e.preventDefault();
          }}
          reply={true}
          placeholder={`Responding to ${name}`}
          id={replyId}
        />
      </div>
    </div>
  );
};

export default Comment;
