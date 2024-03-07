import { addCategory } from "../services/apiFacade";
import { useRef } from "react";

export default function AddCategory() {
  const categoryNameRef = useRef<HTMLInputElement>(null);


  async function submitNewCategory() {
    try {
      const name = categoryNameRef.current?.value; 
      if (name) {
        console.log(name);
        await addCategory(name);
        alert("Category added successfully");
      } else {
        console.error("Category name is empty");
      }
    } catch (error) {
      console.error("Present the error to the user", error);
    }
  }

  return (
    <>
      <h2>Add Category</h2>
      <label htmlFor="name">Name</label>&nbsp;
      <input type="text" id="name" ref={categoryNameRef} />
      <button onClick={submitNewCategory}>Submit</button>
    </>
  );
}
