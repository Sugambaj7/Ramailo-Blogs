import { React } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <>
          <div className="hover:bg-black hover:text-white transition delay-200 flex justify-center items-center border-b bg-white">
            <Link to="category/Politics">
              <p className="pt-2 pb-2">Politics</p>
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white transition delay-200 flex justify-center items-center border-b">
            <Link to="category/Science & Technology">
              <p className="pt-2 pb-2">Science & Technology</p>
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white transition delay-200 flex justify-center items-center border-b">
            <Link to="category/Celebrities">
              <p className="pt-2 pb-2">Celebrities</p>
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white transition delay-200 flex justify-center items-center border-b">
            <Link to="category/Luxury">
              <p className="pt-2 pb-2">Luxury</p>
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white transition delay-200 flex justify-center items-center border-b">
            <Link to="category/Comedy">
              <p className="pt-2 pb-2">Comedy</p>
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white transition delay-200 flex justify-center items-center border-b">
            <Link to="category/Other">
              <p className="pt-2 pb-2">Other</p>
            </Link>
          </div>
    </>
  );
}
