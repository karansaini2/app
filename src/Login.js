import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let history = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      history("/create");
      window.location.reload();
    });
  };

  return (
    <div
      className="Login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="loginPage"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "aliceblue",
          }}
        >
          Sign In With Google to Continue
        </p>
        <button
          style={{
            width: "205px",
            height: "30px",
            fontSize: "15px",
            marginTop: "15px",
            borderRadius: "20px",
            border: "0",
          }}
          className="login-with-google-btn"
          onClick={signInWithGoogle}
        >
          Sign-in <i class="fas fa-sign-in-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
