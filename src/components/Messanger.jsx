import { Header } from "../parts/header";
import styles from "@/styles/Home.module.css";
import { Sidebar } from "../parts/Sidebar";
import { MessageBox } from "../parts/MessageBox";

export const Messanger = () => {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <Header />
      <div className="h-[calc(100vh_-_100px)]">
        <div className="w-10/12 m-auto pt-5 h-full grid grid-cols-6 ">
          <Sidebar />
          <MessageBox />
        </div>
      </div>
    </div>
  );
};
