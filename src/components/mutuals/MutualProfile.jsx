import PropTypes from "prop-types";

export default function MutualProfile({ name, profile, saved }) {
  return (
    <nav className="flex gap-x-3 items-center">
      <img className="w-10 h-10 rounded-full" src={`${profile}`} alt="" />
      <div className="flex flex-col gap-y-1">
        <h3 className={`leading-none text-sm text-heading-black ${saved ? "" : "capitalize"}`}>{name}</h3>
        <p className="leading-none text-xs text-light-gray capitalize">online</p>
      </div>
    </nav>
  );
}

MutualProfile.propTypes = {
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  saved: PropTypes.bool.isRequired,
}
