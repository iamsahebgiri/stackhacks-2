import { useRouter } from "next/router";
import React, { useEffect } from "react";
import isAuthenticated from "../../utils/isAuthenticated";

function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  return <div>Original Data</div>;
}

export default Home;
