import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = (props) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <div className="password-input">
      {visible ? (
        <AiFillEye className="toggle-password" onClick={handleToggle} />
      ) : (
        <AiFillEyeInvisible
          className="toggle-password"
          onClick={handleToggle}
        />
      )}
      <input
        type={visible ? "text" : "password"}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
    </div>
  );
};

export default PasswordInput;
