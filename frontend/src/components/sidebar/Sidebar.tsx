import Conversations from "./Conversations";
import LogedUser from "./LogedUser";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="col border border-2 rounded rounded-4 px-2 pt-1">
      <LogedUser />
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
