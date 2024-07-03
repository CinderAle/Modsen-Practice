import { useAction } from "@/hooks/useAction";
import { User } from "@/types/user";
import { loginUser } from "@/utils/login";
import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const Authorization = () => {
    const [loginValue, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAction();

    const loginEvent = async (e: FormEvent) => {
        e.preventDefault();
        loginUser(loginValue, password).then((result) => {
            if (result) {
                login(new User(loginValue));
            }
        });
    };

    return (
        <form onSubmit={loginEvent}>
            <TextField
                type="text"
                placeholder="login"
                onChange={(e) => setLogin(e.currentTarget.value)}
            />
            <TextField
                type="password"
                placeholder="pass"
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default Authorization;
