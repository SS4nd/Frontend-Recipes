import { NavLink,Link } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";



export default function NavHeader() {
  const auth = useAuth();
  if (!auth.isLoggedIn()) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>

          
          <AuthStatus />
        </ul>
      </nav>
        );
  } else {
    return (
      <nav>

      <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          
        <AuthStatus/>
      </ul>
      </nav>
    );

  }

}
