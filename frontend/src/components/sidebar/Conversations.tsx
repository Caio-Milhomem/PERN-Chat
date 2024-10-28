import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className="col border-2 border-bottom border-top ps-2 py-1">
      <div
        className="customScrollbar overflow-y-scroll overflow-x-hidden"
        style={{ maxHeight: "68vh" }}
      >
        {conversations.map((conversation) => (
          <Conversation key={conversation.id} conversation={conversation} />
        ))}
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Conversations;
