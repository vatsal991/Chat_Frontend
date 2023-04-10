import { Messanger } from "../src/components/Messanger";
import styles from "@/styles/Home.module.css";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const ID = Cookies.get("UserID");
    console.log(ID);

    if (ID) {
      console.log(ID);
    } else {
      const USR_ID = prompt("Please Enter User ID....");
      Cookies.set("UserID", USR_ID);
    }
  }, []);
  return (
    <>
      <Messanger />
    </>
  );
}
