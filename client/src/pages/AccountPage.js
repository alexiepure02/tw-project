import { getUserInfo } from "../functions/authentication";

const AccountPage = () => {
  const user = getUserInfo();

  return (
    <div className="account">
      <h1>
        Hi, {user.name} {user.surname}!
      </h1>
    </div>
  );
};

export default AccountPage;
