import { BrowserRouter } from "react-router-dom";
import AppRouter from "../router/ui/AppRouter";

const App = () => {
    return (
        <BrowserRouter >
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;