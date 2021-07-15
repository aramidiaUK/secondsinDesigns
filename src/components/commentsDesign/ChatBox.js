import React from "react";

const ChatBox = ({commentState, setCommentState, name, imageLink, onsubmit, placeholder, reply, id}) => {

  const makeChatActive = e => {
    if (!e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.add("active");
    }
  };

  const closeChat = e => {
    if (commentState.length > 0) {
      const res = window.confirm(
        "Are you sure you want to close chat, message content will be removed"
      );

      if (res === true) {
        const textArea = document.querySelector(`#chatBox-${id}`);
        textArea.value = "";
        textArea.style.height = "auto";
        setCommentState("");
      }
    }
  };

  return (
      <div className="chat-body-text-area">
        <div className="chat-body-text-area-container">
          <div className="chat-box" onClick={makeChatActive}>
           { !reply && <div className="image-name">
              <div className="imgBox">
                <img
                  alt={name}
                  src={imageLink}
                  width="32"
                  height="32"
                />
              </div>
              <div className="name">
                <p>{name}</p>
              </div>
            </div> }
            <div className="chat-box-text-area">
              <div className="chat-box-text-area-textbox">
                <textarea
                  placeholder={placeholder}
                  onChange={e => {
                    setCommentState(e.currentTarget.value);
                  }}
                  onInput={e => {
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget
                      .scrollHeight}px`;
                  }}
                  className="chat-box-input"
                  id={`chatBox-${id}`}
                />
              </div>
              <div className="chat-box-text-area-cta">
                <div className="word-count">
                  <span className="wCount">
                    {(commentState && commentState.length) || 0}
                  </span>{" "}
                  length
                </div>
                <div className="chat-box-text-area-cta-btns">
                  <button
                    onClick={closeChat}
                    className="btn textbox-btn btn-white"
                  >
                    <span className="text">Cancel</span>
                  </button>
                  <button onClick={onsubmit} className="btn textbox-btn btn-green" disabled={commentState.length > 0 ? false : true}>
                  <span className="text">Respond</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-underline">
            <p>Comment will be made public</p>
          </div>
        </div>
      </div>
  );
};

export default ChatBox;
