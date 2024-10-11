const Conversation = ({ conversation }: { conversation: any }) => {
  return (
    <div
      className="row align-items-center border-light border-bottom border-end p-1"
      style={{ maxWidth: "350px" }}
    >
      <div className="col-auto">
        <img
          style={{ maxWidth: "60px" }}
          src={conversation.profilePic}
          alt="User avatar"
          className="rounded-circle" // Optional: for a circular avatar
        />
      </div>
      <div className="col">
        <p className="mb-0">{conversation.fullName}</p>{" "}
        {/* Remove bottom margin */}
      </div>
    </div>
  );
};

export default Conversation;
