import { Link } from "react-router-dom";

const Navigation = () => {
    return <nav className="py-3 mb-4 navbar navbar-dark bg-primary">
        <div className="container">
            <ul className="m-0 w-100 list-unstyled d-flex align-items-center justify-content-around">
                <li className="">
                    <Link className="nav-link active" aria-current="page" to="/">Langs</Link>
                </li>
                <li className="">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="">
                    <Link className="nav-link" to="/library">Library</Link>
                </li>
                <li className="">
                    <Link className="nav-link" to="/library/insert">Add a new language</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navigation;