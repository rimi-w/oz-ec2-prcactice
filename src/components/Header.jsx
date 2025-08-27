import { Outlet } from "react-router";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex gap-5 justify-center mb-8">
        <button onClick={() => navigate("/shop")}>Shop</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
