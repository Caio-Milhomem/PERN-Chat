import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
//import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  return (
    <div>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="border border-2 rounded-4 p-2">
          <div className="mb-2">
            <span>To: {selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
      <div>
        <p>Welcome {authUser?.fullName}</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
