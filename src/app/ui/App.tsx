import { BrowserRouter } from "react-router-dom";
import AppRouter from "../router/ui/AppRouter";
import '../assets/styles/main.scss';

const App = () => {
    return (
        <BrowserRouter >
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;