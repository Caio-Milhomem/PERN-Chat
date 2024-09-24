import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div>
      <div>
        <span>To:</span> <span>John doe</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div>
      <div>
        <p>Welcome</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
