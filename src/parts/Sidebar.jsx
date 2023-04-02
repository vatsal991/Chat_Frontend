import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <>
      <div className=" ChatUserList col-span-2 border border-r-2 relative border-r-gray-200 rounded-l-lg bg-white h-full overflow-y-scroll w-full px-5">
        <div className="w-full h-[50px] sticky top-0 bg-white flex items-center justify-between py-10">
          <input
            type="text"
            className="border rounded-lg px-3 py-1 w-10/12"
            placeholder="search"
          />
          <BsThreeDotsVertical
            className="cursor-pointer text-gray-500 hover:text-black"
            size={23}
          />
        </div>

        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
        <SidebarUserComp />
      </div>
    </>
  );
};

const SidebarUserComp = () => {
  return (
    <div className="border-b py-3 hover:bg-gray-100 cursor-pointer rounded-lg">
      <div className="flex items-center px-3">
        <img
          className="h-[50px] w-[50px] object-cover object-right border rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div className="w-full ml-5 mr-3">
          <p className="font-bold text-[14px]">John Doe</p>
          <p className="font-semibol text-xs flex items-center">
            <RiBuildingLine />
            &nbsp;&sdot;&nbsp;Microsoft
          </p>
          <p className="font-normal text-xs truncate text-gray-500">
            Lorem ipsum dolor, sit amet
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm truncate">05:34</p>
          <p className="bg-[#00bcd4] w-max text-white text-xs font-bold leading-none py-1 px-2 border rounded-full">
            5
          </p>
        </div>
      </div>
    </div>
  );
};
