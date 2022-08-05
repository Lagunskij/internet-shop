import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bolt">
                React 2022
            </span>
            <span>
                <Link to={"/"} className="mr-3">Products</Link>
            <Link to={"/about"}>About</Link>
            </span>

        </nav>
    )
}
