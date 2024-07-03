import "./index.css";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { store } from "./store/index.ts";

import firebase from "firebase/compat/app";
import { createContext } from "react";

firebase.initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_CENTER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
});
const firestore = firebase.firestore();

export const StoreContext = createContext({ firebase, firestore });

const persisitor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate persistor={persisitor}>
            <StoreContext.Provider value={{ firebase, firestore }}>
                <App />
            </StoreContext.Provider>
        </PersistGate>
    </Provider>,
);
