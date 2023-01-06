import { Link } from "react-router-dom" // import Link component from react router

const Nav = (props) => {
    return (<>
        <nav className="nav">
            <div className="nav-links-container">
                <Link to="/">
                    <div className="title">iStocks</div>
                </Link>
                <Link to="/stocks">
                    <div>Stocks</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
            </div>
        </nav>
    </>)
}

export default Nav