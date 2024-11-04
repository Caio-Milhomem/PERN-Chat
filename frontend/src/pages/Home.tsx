import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container-fluid vh-100 ">
      <div className="row text-white vh-100">
        <div className="col" style={{ minWidth: "300px", maxWidth: "200px" }}>
          <Sidebar />
        </div>
        <div className="col min-vh-100">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};
export default Home;
