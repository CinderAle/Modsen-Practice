import "./index.css";
import "./styles/fonts.css";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { store } from "./store/index.ts";

const persisitor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate persistor={persisitor}>
            <App />
        </PersistGate>
    </Provider>,
);
