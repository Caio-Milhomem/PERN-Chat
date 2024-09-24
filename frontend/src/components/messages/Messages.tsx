import { DUMMY_MESSAGES } from "../../../dummy_data/dummy";
import Message from "./Message";

const Messages = () => {
  return (
    <div>
      {DUMMY_MESSAGES.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
export default Messages;
