import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  HiAtSymbol,
  HiOutlineFingerPrint,
  HiOutlineUser,
} from "react-icons/hi";
import { register_validate } from "@/lib/validate";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Register() {
  async function handleGoogleSign() {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  }
  async function handleGithubSign() {
    signIn("github", {
      callbackUrl: "http://localhost:3000",
    });
  }
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: register_validate,
    onSubmit,
  });

  //Sign up
  async function onSubmit(values) {
    const options = {
      method: "POST",
      heades: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        if (data) router.push("http://localhost:3000");
      });
  }

  async function handleGoogleSign() {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  }
  async function handleGithubSign() {
    signIn("github", {
      callbackUrl: "http://localhost:3000",
    });
  }
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.login_div}>
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            }
            alt="img"
            height={791}
            width={900}
            style={{ opacity: 1, margin: 0, borderRadius: 10 }}
          />
        </div>

        <section>
          <div>
            <h1 style={{ fontSize: 40, lineHeight: 0 }}>Create Your Account</h1>
            <p>Sign up with email</p>
          </div>

          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.flexcolumn}>
              <label>Username</label>
            </div>
            <div className={styles.inputForm}>
              <span color="black">
                <HiOutlineUser />
              </span>
              <input
                type="text"
                placeholder="Enter Your Username"
                name="username"
                {...formik.getFieldProps("username")}
                className={styles.input}
              />
            </div>
            {formik.errors.username && formik.touched.username ? (
              <span style={{ color: "red" }}>{formik.errors.username}</span>
            ) : (
              <></>
            )}
            <div className={styles.flexcolumn}>
              <label>Email</label>
            </div>
            <div className={styles.inputForm}>
              <span color="black">
                <HiAtSymbol />
              </span>
              <input
                type="email"
                placeholder="Enter Your  Email"
                name="email"
                {...formik.getFieldProps("email")}
                className={styles.input}
              />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : (
              <></>
            )}
            <div className={styles.flexcolumn}>
              <label>Password</label>
            </div>
            <div className={styles.inputForm}>
              <span
                onClick={() => setShow({ ...show, password: !show.password })}
                color="black"
              >
                <HiOutlineFingerPrint />
              </span>
              <input
                type={`${show.password ? "text" : "password"}`}
                placeholder="Enter Your  Password"
                name="password"
                {...formik.getFieldProps("password")}
                className={styles.input}
              />
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            ) : (
              <></>
            )}
            <div className={styles.flexcolumn}>
              <label>Confirm Password</label>
            </div>
            <div className={styles.inputForm}>
              <span
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiOutlineFingerPrint />
              </span>
              <input
                type={`${show.cpassword ? "text" : "password"}`}
                placeholder="Confirm Password"
                name="cpassword"
                {...formik.getFieldProps("cpassword")}
                className={styles.input}
              />
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <span style={{ color: "red" }}>{formik.errors.cpassword}</span>
            ) : (
              <></>
            )}
            <div className={styles.flexrow}>
              <div>
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <span className={styles.span}>Forgot password?</span>
            </div>
            <button className={styles.buttonsubmit}>Sign Up</button>
            <p className={styles.p}>
              Already have an account?
              <Link href={"/login"}>
                <span className={styles.span}>Sign in</span>
              </Link>
            </p>
            <p className={styles.pline}>Or With</p>
            <div className={styles.flexrow}>
              <button
                className={styles.bottom_btn}
                type="submit"
                onClick={handleGoogleSign}
              >
                <FcGoogle style={{ marginBottom: -6 }} size={20} /> Sign in with
                Google
              </button>
              <button
                className={styles.bottom_btn}
                type="submit"
                onClick={handleGithubSign}
              >
                <FaGithub style={{ marginBottom: -6 }} size={20} /> Sign in with
                Github
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
