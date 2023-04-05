import { FaRegUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";
import { RiAttachment2 } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";

export const MessageBox = (props) => {
  return (
    <div
      className={`${
        props.ShowDetails ? `col-span-3` : `col-span-5`
      } bg-white overflow-hidden ${
        props.ShowDetails ? `` : `rounded-r-lg`
      }  relative`}
    >
      <div className="w-full py-3 px-7 border-b flex items-center justify-between">
        <img
          className="h-[50px] w-[50px] object-cover object-right border rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div className="ml-3 w-full">
          <p className="font-bold text-[16px]">John Doe</p>
          <p className="font-semibol text-xs flex items-center">
            <RiBuildingLine />
            &nbsp;&sdot;&nbsp;Microsoft
          </p>
        </div>

        <FaRegUser
          onClick={() => props.SetShowDetails(true)}
          size={20}
          className="mr-3 cursor-pointer"
        />
        <BsThreeDotsVertical size={25} className="cursor-pointer" />
      </div>

      <div
        id="MessBoxScroll"
        className="h-[calc(100%_-_120px)] w-full p-5 flex flex-col overflow-y-scroll"
      >
        <RecievedMess />
        <SentMess />
        <RecievedMess />
        <SentMess />
        <RecievedMess />
        <SentMess />
        <RecievedMess />
        <SentMess />
        <RecievedMess />
        <SentMess />
        <RecievedMess />
        <SentMess />
      </div>

      <div className="h-[50px] w-full border-t bg-white absolute bottom-0 flex items-center px-5">
        <input
          type="text"
          placeholder="Type Here.."
          className="border-none outline-none h-full w-full"
        />
        <RiAttachment2 className="cursor-pointer" size={23} />
        <div className="bg-[#00bcd4] p-2 text-white ml-2 rounded-full flex items-center cursor-pointer">
          <IoMdSend />
        </div>
      </div>
    </div>
  );
};

const RecievedMess = () => {
  return (
    <div className="w-full">
      <div className="flex float-left">
        <img
          className="h-[30px] w-[30px] object-cover object-right border rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />

        <div className="ml-3">
          <p className="text-xs">
            <strong>John Doe</strong> 12:45 PM
          </p>
          <div
            style={{ borderTopLeftRadius: 0 }}
            className="rounded-xl bg-gray-200 px-3 py-2 mt-1 text-[15px]"
          >
            Hii !
          </div>
        </div>
      </div>
    </div>
  );
};

const SentMess = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row-reverse float-right">
        <img
          className="h-[30px] w-[30px] object-cover object-right border rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />

        <div className="mr-3">
          <p className="text-xs">
            <strong>You</strong> 12:45 PM
          </p>
          <div
            style={{ borderTopRightRadius: 0 }}
            className="rounded-xl bg-[#00bcd4] text-white px-3 py-2 mt-1 text-[15px]"
          >
            Hii !
          </div>
        </div>
      </div>
    </div>
  );
};
