import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import MainPage from "./components/mainPage/MainPage";
import useStore from "./bll/state/store";
// import { StaticRouter } from 'react-router-dom';


function App() {

    return (
        <div>
            {/*<StaticRouter location={"/start"}>*/}
            {/*<BrowserRouter>*/}
            <span>
                asdasd
            </span>
                {/*<Routes>*/}
                {/*    <Route path={"/start/!*"} element={<StartPage/>}/>*/}
                {/*    /!*<Route path={"/main/!*"} element={<MainPage/>}/>*!/*/}
                {/*</Routes>*/}
            {/*</BrowserRouter>*/}
            {/*</StaticRouter>*/}
        </div>
    );
    // return(
    //     <div>
    //         Hello!
    //     </div>
    // );
}

export default App;
