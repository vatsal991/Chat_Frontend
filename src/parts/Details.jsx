import { GrFormClose } from "react-icons/gr";

export const Details = (props) => {
  return (
    <div className="col-span-2 border border-r-2 relative border-r-gray-200 rounded-r-lg bg-white h-full w-full">
      <div className="flex px-5 border-b h-[74px] items-center">
        <GrFormClose
          onClick={() => props.SetShowDetails(false)}
          className="cursor-pointer"
          size={27}
        />
        <p className="ml-5 text-lg font-semibold">Details</p>
      </div>
    </div>
  );
};
