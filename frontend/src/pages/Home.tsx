import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container pt-2">
      <div className="row text-white">
        <div className="col" style={{ maxWidth: "350px" }}>
          <Sidebar />
        </div>
        <div className="col">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
