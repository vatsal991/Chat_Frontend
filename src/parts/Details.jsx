import { GrFormClose } from "react-icons/gr";
import { RiBuildingLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { useState } from "react";

export const Details = (props) => {
  const [ActiveTab, setActiveTab] = useState(1);

  return (
    <div className="col-span-2 border border-r-2 relative border-r-gray-200 rounded-r-lg bg-white h-full w-full">
      <div className="flex px-5 border-b h-[74px] items-center sticky top-0">
        <GrFormClose
          onClick={() => props.SetShowDetails(false)}
          className="cursor-pointer"
          size={27}
        />
        <p className="ml-5 text-lg font-semibold">Details</p>
      </div>

      <div className="w-full p-5 flex flex-col items-center border-b">
        <img
          className="h-[150px] w-[150px] object-cover object-right border rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <p className="text-2xl font-semibold mt-5">John Doe</p>
        <p className="font-semibol text-sm flex items-center">
          <RiBuildingLine />
          &nbsp;&sdot;&nbsp;Microsoft
        </p>
      </div>

      <div>
        <div className="w-11/12 rounded-md bg-slate-200 flex flex-row p-1 gap-1 m-auto mt-3">
          <div
            onClick={() => setActiveTab(1)}
            className={`w-full p-2 py-3 flex items-center justify-center ${
              ActiveTab == 1 ? `bg-white` : null
            } cursor-pointer rounded-md`}
          >
            <FaUserAlt size={20} />
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={`w-full p-2 py-3 flex items-center justify-center ${
              ActiveTab == 2 ? `bg-white` : null
            } cursor-pointer rounded-md`}
          >
            <AiFillFile size={20} />
          </div>
          <div
            onClick={() => setActiveTab(3)}
            className={`w-full p-2 py-3 flex items-center justify-center ${
              ActiveTab == 3 ? `bg-white` : null
            } cursor-pointer rounded-md`}
          >
            <MdAccessTimeFilled size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
