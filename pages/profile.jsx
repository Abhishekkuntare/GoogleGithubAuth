import { getSession } from "next-auth/react";
import React from "react";

export default () => {
  return (
    <section>
      <h3>Profile page</h3>
    </section>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({
    req,
  });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  //authorized user return
  return {
    props: { session },
  };
}
