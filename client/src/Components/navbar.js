import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
export default function Navbar() {
  const navigate = useNavigate();
  const navEnum = {
    "home": () => navigate("/home"),
    "create-post": () => navigate("/create-post"),
    "edit": () => navigate("/edit"),
  };

  function nav(route) {
    navEnum[route]();
  }
 return (
    <ul className="flex border-b">
      <li className="mr-1">
        <button className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={() => nav("home")}>Home</button>
      </li>
      <li className="mr-1">
        <button className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={() => nav("create-post")}>Create</button>
      </li>
      <li className="mr-1">
        <button className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={() => nav("edit")}>Edit</button>
      </li>
    </ul>
 );
}