import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container-fluid vh-100 ">
      <div className="row text-white vh-100">
        <div className="col" style={{ maxWidth: "45vh" }}>
          <Sidebar />
        </div>
        <div className="col w-75 min-vh-100">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
