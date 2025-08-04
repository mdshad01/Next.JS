export const dynamic = "force-dynamic";
import styles from "./home.module.css";
import "./home.scss";

const Home = () => {
  // const randomNumber = Math.random();
  // console.log(randomNumber);

  // if (randomNumber > 0.5) {
  //   throw new Error("Error occurred");
  // }

  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.title}>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;
