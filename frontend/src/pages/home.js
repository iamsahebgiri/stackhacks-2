import { useRouter } from "next/router";
import React from "react";
import isAuthenticated from "../../utils/isAuthenticated";

function Home() {
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      router.push("login");
    }
  }, []);

  return <div>Home</div>;
}

export default Home;
