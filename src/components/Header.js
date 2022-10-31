import "../styles.scss";
import Button from "./Button";

const Header = () => {
  const onAuthenticationClick = () => {
    console.log("auth");
  };

  const onRegisterClick = () => {
    console.log("register");
  };

  return (
    <div className="header" id="myHeader">
      <h1>React App</h1>
      <p className="fill"></p>
      <Button variant="2" onClick={onAuthenticationClick}>
        Autentificare
      </Button>
      <Button variant="2" onClick={onRegisterClick}>
        Inregistrare
      </Button>
    </div>
  );
};

export default Header;
