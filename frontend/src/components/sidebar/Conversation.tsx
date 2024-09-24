const Conversation = ({ conversation }: { conversation: any }) => {
  return (
    <>
      <div>
        {/* top container */}
        <div>
          {/* avatar pic */}
          <img src={conversation.profilePic} alt="User avatar" />
        </div>
        <div>
          {/* username */}
          <p>{conversation.fullName}</p>
        </div>
      </div>
    </>
  );
};

export default Conversation;
