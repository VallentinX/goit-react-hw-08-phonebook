import { useAuth } from "../../hooks/UseAuth";
import { Links } from "./Navigation.style";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Links to="/" end>
        Home
      </Links>
      {isLoggedIn && <Links to="/contacts">Phonebook</Links>}
    </nav>
  );
};

export default Navigation;
