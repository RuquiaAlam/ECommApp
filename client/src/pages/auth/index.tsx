import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { UserErrors } from "../../errors"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
};
const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/user/register", {
        username,
        password,
      });
      alert("Registration Completed !Now Login.");
    } catch (err) {
      if (err?.response?.data?.type === UserErrors.USERNAME_ALREADY_EXISTS) {
        alert("ERROR:Username already exists");
      } else {
        alert("ERROR:Something went wrong.");
      }
    }
  };

  return (
    <div className="auth-container">
      <form>
        <h2>Register</h2>
        <div className="form-group">
          {/* link labels with input  */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          {/* link labels with input  */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};
const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });
      setCookies("access_token", result.data.token);
      localStorage.setItem("UserID", result.data.userID);
      navigate("/");
    } catch (err) {
      let errorMessage: string = "";
      switch (err.response.data.type) {
        case UserErrors.NO_USER_FOUND: {
          errorMessage = "User does not exist";
          break;
        }
        case UserErrors.WRONG_CREDENTIALS: {
          errorMessage = "Wrong credentials";
          break;
        }
        default: {
          errorMessage = "Something went wrong";
        }
      }
      alert("ERROR :" + errorMessage);
    }
  };
  return (
    <div className="auth-container">
      <form>
        <h2>Login</h2>
        <div className="form-group">
          {/* link labels with input  */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          {/* link labels with input  */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
