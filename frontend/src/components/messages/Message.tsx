import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation, { MessageType } from "../../zustand/useConversation";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser?.id;
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  return (
    <div
      className="rounded rounded-4 px-2 py-1 mb-1"
      style={{ backgroundColor: "hsl(262, 61%, 10%)" }}
    >
      {fromMe ? (
        <div className="row">
          <div className="col">
            <p className="text-light m-0">{message.body}</p>
          </div>
          <div
            className="col-auto p-0 me-2"
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
      ) : (
        <div className="row">
          <div
            className="col-auto me-2"
            style={{ width: "40px", height: "40px" }}
          >
            <img
              src={img}
              alt="Profile"
              className={`rounded-circle text-end`}
              style={{ height: "40px" }}
            />
          </div>
          <div className="col">
            <p className="text-light m-0">{message.body}</p>
          </div>
        </div>
      )}
      <div className="row">
        <span className="col text-start">{extractTime(message.createdAt)}</span>
        <span className="col text-end">visto</span>
      </div>
    </div>
  );
};
export default Message;
