import Button from "../components/Button";
import { getUserInfo } from "../functions/authentication";

const AccountPage = () => {
  const user = getUserInfo();

  return (
    <div className="account">
      <div className="container">
        <h1>
          Salut, {user.name} {user.surname}!
        </h1>
        <h3>Numele de utilizator: </h3>
        <h2>{user.username}</h2>
        <h3>Adresa de email: </h3>
        <h2>{user.email}</h2>
        <div className="buttons">
          <Button variant="1">Schimbă adresa de email</Button>
          <Button variant="1">Schimbă parola</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
