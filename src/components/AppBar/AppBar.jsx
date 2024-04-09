import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { Header } from "./AppBar.style";
import { useAuth } from "../../hooks/UseAuth";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <Header>
      <Navigation />
      {renderNavigation()}
    </Header>
  );
};

export default AppBar;
