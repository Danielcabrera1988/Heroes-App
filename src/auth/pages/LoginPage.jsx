import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigation = useNavigate();
  const onLogin = () => {
    navigation("/", {
      replace: true
    });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary" nClick={onLogin}>
          Login
        </button>
      </div>
    </>
  );
};
