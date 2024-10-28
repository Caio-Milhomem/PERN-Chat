import { useAuthContext } from "../../context/AuthContext";

const LogedUser = () => {
  const { authUser, isLoading } = useAuthContext();
  const isOnline = true;

  return (
    <div
      className="row align-items-center p-1 m-0 border-2 border-bottom flex-nowrap overflow-x-hidden"
      style={{
        maxWidth: "350px",
      }}
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
            style={{ maxWidth: "75px" }}
            src={authUser?.profilePic}
            alt="User avatar"
            className="rounded-circle" // Optional: for a circular avatar
          />
        </div>
      </div>
      <div className="col">
        <p className="mb-0 text-nowrap" style={{ fontSize: "4vh" }}>
          {authUser?.fullName}
        </p>
      </div>
    </div>
  );
};

export default LogedUser;
