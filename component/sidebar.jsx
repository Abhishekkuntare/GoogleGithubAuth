import styles from "../styles/dashboard.module.css";
import d from "../public/assets/d.png";
import t from "../public/assets/t.png";
import s from "../public/assets/s.png";
import se from "../public/assets/se.png";
import u from "../public/assets/u.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.main_sidebar}>
      <div>
        <div className={styles.sidebar_h1}>
          <h1>Board.</h1>
        </div>

        <div className={styles.sidebar_li}>
          <li>
            <Image src={d} alt="img" /> Dashboard
          </li>
          <li>
            <Image src={t} alt="img" /> Transactions
          </li>
          <li>
            {" "}
            <Image src={s} alt="img" />
            Schedules
          </li>
          <li>
            <Image src={u} alt="img" />
            Users
          </li>
          <li>
            <Image src={se} alt="img" /> Settings
          </li>
        </div>

        <div className={styles.sidebar_span}>
          <span>Help</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
