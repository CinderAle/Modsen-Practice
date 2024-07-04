import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";

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
