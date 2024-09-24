import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
