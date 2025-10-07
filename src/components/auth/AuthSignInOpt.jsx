import { useNavigate } from "react-router-dom";

const AuthSignInOpt = ({ array }) => {
  const navigateTo = useNavigate();

  return (
    <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-3">
      {array.map(({ id, icon, text, navigate }) => {
        return (
          <main key={id} onClick={() => navigate && navigateTo(navigate)} className="flex gap-x-2.5 md:gap-x-5 lg:gap-x-4 justify-center items-center cursor-pointer border-gray-light border md:border-2 rounded-md md:rounded-xl lg:rounded-lg py-3 lg:py-2">
            <img src={icon} alt={text} className="w-3 h-3 md:w-7 md:h-7 lg:w-6 lg:h-6" />
            <span className="font-semibold text-xs md:text-xl lg:text-sm">{text}</span>
          </main>
        );
      })}
    </div>
  );
};

export default AuthSignInOpt;
