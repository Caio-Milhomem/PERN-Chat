import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation, { MessageType } from "../../zustand/useConversation";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser?.id;
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  return (
    <div className="container">
      {fromMe ? (
        <>
          <div className="row  d-flex  justify-content-end">
            <div
              className="col-auto rounded rounded-4 me-1"
              style={{
                backgroundColor: "hsl(262, 61%, 100%)",
                maxWidth: "80%",
              }}
            >
              <p className="text-dark text-wrap text-break m-0">
                {message.body}
              </p>
              <div className="text-end text-dark">
                <span>{"<>"}</span>
              </div>
            </div>
            <div
              className="col-auto p-0 pt-1"
              style={{ width: "40px", height: "40px" }}
            >
              <img
                src={img}
                alt="Profile"
                className={`rounded-circle text-end`}
                style={{ height: "40px" }}
              />
            </div>
          </div>
          <div className="row">
            <span className="col text-end p-0">
              {extractTime(message.createdAt)}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="row  d-flex  justify-content-start">
            <div
              className="col-auto p-0 pt-1"
              style={{ width: "40px", height: "40px" }}
            >
              <img
                src={img}
                alt="Profile"
                className={`rounded-circle text-end`}
                style={{ height: "40px" }}
              />
            </div>
            <div
              className="col-auto rounded rounded-4 ms-1 pb-1 align-content-center"
              style={{ backgroundColor: "hsl(0, 0%, 15%)", maxWidth: "80%" }}
            >
              <p
                className="text-light text-wrap text-break m-0"
              >
                {message.body}
              </p>
            </div>
          </div>
          <div className="row">
            <span className="col text-start p-0">
              {extractTime(message.createdAt)}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
export default Message;
