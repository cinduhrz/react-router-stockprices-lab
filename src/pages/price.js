import { useLoaderData } from 'react-router-dom'

const Price = (props) => {
    // get data fetched by loader
        const stock = useLoaderData()

        // console.log(stock)

    return (<>
        <div className="stock">
            <h1>
                {stock.symbol}
            </h1>
            <h2>{stock.price}</h2>
        </div>
    </>)
}

export default Price