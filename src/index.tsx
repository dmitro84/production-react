import ReactDOM from "react-dom";
import {Counter} from "./components/Counter";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)