// import dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"

// create the router and save in a variable
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h1>Hello World</h1>}>

        </Route>
    )
)

// export router
export default router