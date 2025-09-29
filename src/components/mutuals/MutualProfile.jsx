import display_picture from "../../assets/display-picture.jpg";

export default function MutualProfile() {
  return (
    <nav className="flex gap-x-3 items-center">
      <img
        className="w-10 h-10 rounded-full"
        src={display_picture}
        alt=""
      />
      <div className="flex flex-col gap-y-1">
        <h3 className="leading-none text-sm text-[#2B2B2B] capitalize">cameron williamson</h3>
        <p className="leading-none text-xs text-[#d4d4d4] capitalize">online</p>
      </div>
    </nav>
  );
}
