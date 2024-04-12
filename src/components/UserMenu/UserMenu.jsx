import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/UseAuth";
import { Container, Name } from "./UserMenu.style";
import Button from "../Button";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Name style={{ color: "#fff" }}>{user.name}</Name>
      <Button type="button" action={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}
