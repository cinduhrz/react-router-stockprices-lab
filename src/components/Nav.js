import { Link } from "react-router-dom" // import Link component from react router

const Nav = (props) => {
    return (<>
        <nav className="nav">
            <Link to="/">
                <div>iStocks</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </nav>
    </>)
}

export default Nav