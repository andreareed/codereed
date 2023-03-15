import github from "../../assets/github-logo.png";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <h1>ANDREA REED</h1>
      <h3>
        Code Warrior <span>|</span> Coffee Addict <span>|</span> Dog Person
      </h3>

      <a
        href="https://github.com/andreareed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github logo" />
      </a>
    </div>
  );
};

export default Landing;
