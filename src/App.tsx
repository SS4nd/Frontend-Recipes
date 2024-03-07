import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import RecipesLayout from "./recipes/RecipesLayout"
import AddCategory from "./recipes/addCategory"
import Layout from "./Layout";
import Home from "./Home";
import Logout from "./security/Logout"
import RequireAuth from "./security/RequireAuth"
import "./App.css";

export default function App() {
  //const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />

        <Route path="/recipes" element={<RecipesLayout/>}>          
         <Route path=":id" element={<Recipe />} />
        </Route>

        <Route path="/add" element={<RecipeForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add"
          element={
            <RequireAuth roles={["USER"]}>
               <RecipeForm />
            </RequireAuth>
          }
        />

        <Route path="/newCategory"
          element={
            <RequireAuth roles={["USER"]}>
               <AddCategory />
            </RequireAuth>
          }
        />

        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Layout>
  );
}
