import { Header } from "../parts/header";
import styles from "@/styles/Home.module.css";
import { Sidebar } from "../parts/Sidebar";
import { MessageBox } from "../parts/MessageBox";
import { useState } from "react";
import { Details } from "../parts/Details";

export const Messanger = () => {
  const [ShowDetails, SetShowDetails] = useState(true);
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <Header />
      <div className="h-[calc(100vh_-_100px)]">
        <div className="w-11/12 m-auto mt-2 h-full py-3">
          <div className="grid grid-cols-7 h-full border rounded-lg border-gray-200 shadow-xl">
            <Sidebar />
            <MessageBox
              ShowDetails={ShowDetails}
              SetShowDetails={SetShowDetails}
            />
            {ShowDetails ? <Details SetShowDetails={SetShowDetails} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
