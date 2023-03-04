import { Outlet, useNavigate } from "react-router-dom";
import { Div } from "../components/styles/Contact.styled";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <h5 className="text-center mb-5">Contact</h5>
      <button className="btn btn-success w-50" onClick={() => navigate("")}>
        Instagram
      </button>
      <button
        className="btn btn-warning w-50"
        onClick={() => navigate("facebook")}
      >
        Facebook
      </button>
      <Outlet />
    </Div>
  );
};

export default Contact;
