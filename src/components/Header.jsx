import { Link } from "react-router-dom";

export default function Header() {


  return (
    <header className="bg-slate-700 text-white py-4 ">
      <nav className="flex justify-between px-5 ">
        <h1>
          <Link to="/">E-Commerce</Link>
        </h1>
        <ul className="flex gap-5">
          <Link to="/blog">Blogs</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart (0)</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
        <select
          name="currency"
          className="bg-black px-4 rounded cursor-pointer"
     
        >

         <option value="a">data</option>
        </select>
      </nav>
    </header>
  );
}