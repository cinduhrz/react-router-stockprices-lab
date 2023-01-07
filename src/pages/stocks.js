import { Link, useLoaderData } from "react-router-dom"
import { priceLoader } from "../loaders"

const Stocks = (props) => {    
    const stocks = useLoaderData() // returns array
    console.log(stocks)
      

    return (<>
        <div className="stocks">
            <ul>
                {stocks.map((stock) => {
                    const {name, symbol} = stock

                    return (
                            <li key={symbol}>
                                <Link to={`/price/${symbol}`}>
                                    <h2>{name}</h2>
                                </Link>
                            </li>
                    )
                })}
            </ul>
        </div>
    </>)
}

export default Stocks