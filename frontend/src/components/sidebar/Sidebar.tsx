import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div>
      {/*<SearchInput />*/}
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
