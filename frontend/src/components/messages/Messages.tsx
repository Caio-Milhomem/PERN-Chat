import useChatScroll from "../../hooks/useChatScroll";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;
  return (
    <div
      className="overflow-y-scroll overflow-x-hidden pe-2 customScrollbar mb-1"
      ref={ref}
      style={{
        maxHeight: "81vh",
      }}
    >
      {loading && (
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
export default Messages;
