import styles from "../styles/dashboard.module.css";
import { BsSearch } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.main_navbar}>
      <div>
        <h1>Dashboard</h1>
      </div>

      <div className={styles.main_navbar_right}>
        <input type="text" placeholder="search" />
        <BsSearch />
        <BiBell />
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          }
          alt="image"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
};

export default Navbar;
