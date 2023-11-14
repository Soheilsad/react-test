import LoginView from "../components/LoginView";
import styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  return (
    <div className={styles.loginScreen}>
      <LoginView />
    </div>
  );
};

export default LoginScreen;
