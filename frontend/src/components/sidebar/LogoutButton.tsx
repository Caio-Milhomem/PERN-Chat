import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  return <div onClick={logout}>Botão de logout topzera</div>;
};
export default LogoutButton;
