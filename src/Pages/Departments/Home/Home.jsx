import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [name, setName] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        console.log("token not found")
        navigate("/d/login/");
      }
      const { data } = await axios.post(
        "http://localhost:4000/d/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setName(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/d/login/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/d/signup/");
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{name}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;