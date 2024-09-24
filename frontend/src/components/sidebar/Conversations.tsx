import { DUMMY_CONVERSATIONS } from "../../../dummy_data/dummy";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div>
      {DUMMY_CONVERSATIONS.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
};

export default Conversations;
