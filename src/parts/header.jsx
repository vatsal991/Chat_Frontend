import Image from "next/image";
import Logo from "../../public/Olavel_5_CefJM7R.png";

export const Header = () => {
  return (
    <div className="w-full bg-[#042e47] py-[15px] px-5">
      <Image src={Logo} height={50} />
    </div>
  );
};
