import React, { useState } from "react";
import ChatBox from "./ChatBox";
import Comment from "./Comment";
import "./CommentsStyles.css";

const CommentBody = ({responseCount}) => {
  const [commentState, setCommentState] = useState("");
  const [sortOrder, setSortOrder] = useState("Most Relevant");

  return (
    <div className="commentBody">
      <div className="chat-body">
        <div className="header-responses">
          <div className="text">
            <h2>
              Responses ({responseCount || 0})
            </h2>
          </div>
          <div className="icons">
            <span className="icons-icon">
              <i class="bx bx-info-circle" />
            </span>
            <span className="icons-icon">
              <i class="bx bx-x-circle" />
            </span>
          </div>
        </div>
        <ChatBox
          commentState={commentState}
          setCommentState={setCommentState}
          name="Henry Akinola"
          imageLink={`https://miro.medium.com/fit/c/32/32/0*pkblqPPQSeVXAKyO`}
          onsubmit={e => {
            e.preventDefault();
          }}
          reply={false}
          placeholder={"What are your thoughts?"}
          id="main"
        />
      </div>
      <div className="comments-sort">
        <button type="button">
          {sortOrder}
        </button>
      </div>
      <div className="comments">
        <Comment
          imageLink={`https://miro.medium.com/fit/c/32/32/0*pkblqPPQSeVXAKyO`}
          name="Henry Akinola"
          joinedTime={"2 years ago"}
          content={`In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available`}
          likesCount={2}
          repliesCount={10}
          replyId={'1'}
        />
        <Comment
          imageLink={`./assets/images/gameplay.jpeg`}
          name="Mitch Jones"
          joinedTime={"6 Months ago"}
          content={`In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available`}
          likesCount={8}
          repliesCount={7}
          replyId={'2'}
        />
      </div>
    </div>
  );
};

export default CommentBody;
