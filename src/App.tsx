import {Route, Routes } from "react-router-dom";
import {Counter} from "./components/Counter";
import "./index.scss";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path={'/about'}/>
                <Route path={'/'}/>

            </Routes>
        </div>
    )
}

export default App;