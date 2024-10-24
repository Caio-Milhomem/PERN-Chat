import { ChangeEvent, useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import e from "express";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const textareaHeight = "40px";

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
    // after sending the message reset the textarea height to 40px
    const textarea = document.getElementById(
      "messageTextarea"
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = `${textareaHeight}`;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto"; // Reset height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set to scroll height
    if (e.target.value === "") e.target.style.height = `${textareaHeight}`;
  };

  const handleBlur = () => {
    const textarea = document.getElementById(
      "messageTextarea"
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = `${textareaHeight}`; // Reset height on blur
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column">
          <div
            className="d-flex flex-column"
            style={{ height: "45px", position: "relative" }}
          >
            <textarea
              id="messageTextarea"
              className="form-control text-break flex-grow-1 overflow-scroll overflow-x-hidden customScrollbar"
              placeholder="Send a message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              style={{
                position: "absolute",
                bottom: 0,
                maxHeight: "170px",
                height: `${textareaHeight}`,
                width: "94%",
                resize: "none",
                overflow: "hidden",
              }}
            />
            <button
              type="button"
              className="btn btn-primary align-self-end"
              style={{ bottom: 0, position: "absolute" }}
              onClick={handleSubmit}
            >
              {loading ? (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ width: "25px", height: "25px" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 18 15"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
