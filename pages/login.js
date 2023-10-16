import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });
  console.log(formik.errors);

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status.ok) {
      router.push(status.url);
    }
  }
  const [show, setShow] = useState(false);

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
    <div style={{ margin: 0, padding: 0 }}>
      <Head>
        <title>Login</title>
      </Head>

      <div className={styles.login_div}>
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1682687220499-d9c06b872eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt="img"
            height={691}
            width={800}
            style={{ opacity: 1, margin: 0, borderRadius: 20 }}
          />
        </div>

        <section>
          <div>
            <h1 style={{ fontSize: 40, lineHeight: 0 }}>Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          {/* <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                {...formik.getFieldProps("email")}
              />
              <span color="black">
                <HiAtSymbol />
              </span>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span className="text-red-600">{formik.errors.email}</span>
            ) : (
              <></>
            )}
            <div>
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                {...formik.getFieldProps("password")}
              />
              <span onClick={() => setShow(!show)} color="black">
                <HiOutlineFingerPrint />
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-red-500">{formik.errors.password}</span>
            ) : (
              <></>
            )}
            <button type="submit">Login</button>
          </form>
          <button type="submit" onClick={handleGoogleSign}>
            Sign in with Google
          </button>
          <button type="submit" onClick={handleGithubSign}>
            Sign in with Github
          </button>
          <p>
            don't have an account yet ? <Link href={"/register"}>Sign Up</Link>
          </p> */}

          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.flexcolumn}>
              <label>Email</label>
            </div>
            <div className={styles.inputForm}>
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                {...formik.getFieldProps("email")}
                className={styles.input}
                placeholder="Enter your Email"
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
              <span onClick={() => setShow(!show)} color="black">
                <HiOutlineFingerPrint />
              </span>
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                {...formik.getFieldProps("password")}
                className={styles.input}
                placeholder="Enter your Password"
              />
              <svg
                onClick={() => setShow(!show)}
                viewBox="0 0 576 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Include the path here */}
              </svg>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
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
            <button className={styles.buttonsubmit}>Sign In</button>
            <p className={styles.p}>
              don't have an account yet ?{" "}
              <Link href={"/register"}>
                <span className={styles.span}>Sign Up</span>
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
