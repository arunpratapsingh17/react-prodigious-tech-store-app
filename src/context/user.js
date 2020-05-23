// user context
import React from "react";
const UserContext = React.createContext();
function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}
export default function UserProvider({ children }) {
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  console.log("To check gta 5");
  console.log(user);
  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };

  const [alert, setAlert] = React.useState({
    show: false,
    msg: "",
    type: "success",
  });
  console.log(alert);

  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ show: true, msg, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext };
