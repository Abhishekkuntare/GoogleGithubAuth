import Head from "next/head";
import Sidebar from "@/component/sidebar";
import Navbar from "../component/navbar";
import Charts from "@/component/Charts";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div style={{ display: "flex" }}>
        <div>
          {/* sidebar */}
          <Sidebar />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            {/* navbar */}
            <Navbar />
          </div>
          <div>
            {/* charts  */}
            <Charts />
          </div>
        </div>
      </div>
    </>
  );
}
