import React from "react";
import { useHistory } from "react-router-dom";
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
//strapi function

//handle user

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username;
  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };
  const handleSubmit = async (e) => {
    //alert
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      console.log("Success");
      console.log(response);
    }
  };
  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "Register"}</h2>
      <form className="login-form">
        {/* Single Input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isMember && (
          <div className="form-control">
            <label htmlFor="Username">Username</label>
            <input
              type="Username"
              id="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* End of single input */}
        {/* Empty form text */}
        {isEmpty && (
          <p className="form-empty">Please fill out all form fields</p>
        )}
        {/* Button for login */}
        {!isEmpty && (
          <button
            className="btn btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        {/* Register link */}
        <p className="register-link">
          {isMember ? "Need To Register" : "Already a member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
