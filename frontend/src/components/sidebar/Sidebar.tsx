import Conversations from "./Conversations";
import LogedUser from "./LogedUser";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div
      className="container border border-2 rounded rounded-4 px-2 pt-1"
      style={{ maxHeight: "100vh", height: "auto" }}
    >
      <LogedUser />
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
