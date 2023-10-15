import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from "../pages/Home/home.tsx";
import About from "../pages/About/About.tsx";

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Route>
        </Routes>
    )
}

export default Router;