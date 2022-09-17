import ReactDOM from 'react-dom'
import {Counter} from './components/Counter'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './theme/ThemeProvider'

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)