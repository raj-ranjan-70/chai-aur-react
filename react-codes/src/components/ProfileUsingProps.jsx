import { FaWhatsapp, FaTelegramPlane, FaGithub, FaEllipsisV } from "react-icons/fa";

export default function ProfileCard(props) {


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f2f4]">
      <div className="w-95 bg-[#121416] rounded-3xl text-white px-6 pb-10 pt-6 shadow-2xl text-center font-[Poppins]">
        
        {/* top bar */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-lg opacity-90">
            <FaWhatsapp />
            <FaTelegramPlane />
            <FaGithub />
          </div>

          <FaEllipsisV className="text-lg opacity-90 cursor-pointer" />
        </div>

        {/* avatar */}
        <div className="mt-5 flex justify-center">
          <img
            src={`https://api.dicebear.com/7.x/adventurer/png?seed=${props.name}`}
            className="w-32 h-32 rounded-full border-2 border-white object-cover"
            />
        </div>

        {/* name */}
        <h2 className="mt-4 text-2xl font-semibold">
          {props.name}
        </h2>

        {/* quote */}
        <p className="mt-2 text-sm opacity-90 max-w-95 mx-auto leading-snug">
          {props.quote}
        </p>

        {/* button */}
        <button className="mt-6 bg-[#cfa06b] text-white py-3 px-6 rounded-full w-3/4 hover:scale-105 transition">
          contact me!
        </button>
      </div>
    </div>
  );
}
