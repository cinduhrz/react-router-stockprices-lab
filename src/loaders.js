export const priceLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "70c41fcde63658424146c7d27206b597"
    return (await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`)).json()
}