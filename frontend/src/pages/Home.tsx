import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container-fluid vh-100 pt-2">
      <div className="row text-white p-0" style={{ maxHeight: "100%" }}>
        <div className="col" style={{ maxWidth: "300px" }}>
          <Sidebar />
        </div>
        <div className="col w-75">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
