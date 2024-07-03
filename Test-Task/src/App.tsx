import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
    // Для следующего ревью
    // Добавление отдельных файлов и каталогов для стилей компонентов будут добавлены в дальнейшем
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
