import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;
  const isOnline = false;
  return (
    <div
      className="row align-items-center p-1 rounded rounded-4 m-0"
      style={{
        maxWidth: "350px",
        backgroundColor: isSelected ? "hsl(262, 61%, 55%)" : "",
      }}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="col-auto">
        <div className="position-relative d-inline-block">
          {isOnline && (
            <div
              style={{
                top: "0",
                left: "0",
                width: "15px",
                height: "15px",
                position: "absolute",
                backgroundColor: "green",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          )}
          <img
            style={{ maxWidth: "60px" }}
            src={conversation.profilePic}
            alt="User avatar"
            className="rounded-circle" // Optional: for a circular avatar
          />
        </div>
      </div>
      <div className="col">
        <p className="mb-0">{conversation.fullName}</p>{" "}
        {/* Remove bottom margin */}
      </div>
    </div>
  );
};

export default Conversation;
