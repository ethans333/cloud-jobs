import { useNavigate } from "react-router-dom";
import sparkles from "../assets/sparkles.svg";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="font-bold text-2xl flex justify-center items-center ml-5 mr-24">
        <div className="title-text italic">cloud careers</div>
      </div>
      <div className="navbar-button" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="navbar-button" onClick={() => navigate("/jobs")}>
        Jobs
      </div>
      <div className="navbar-button" onClick={() => navigate("/")}>
        Learn
      </div>
    </div>
  );
}
