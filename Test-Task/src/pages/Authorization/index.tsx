import { constants } from "@/constants/constants";
import { useAction } from "@/hooks/useAction";
import { User } from "@/types/user";
import { loginUser } from "@/utils/login";
import { Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Authorization = () => {
    const [loginValue, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAction();
    const navigate = useNavigate();

    const loginEvent = async (e: FormEvent) => {
        e.preventDefault();
        loginUser(loginValue, password).then((result) => {
            if (result) {
                login(new User(loginValue));
            }
        });
        navigate(constants.MAP_ROUTE);
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
            <Typography>
                <Link to={constants.REGISTER_ROUTE}>Register</Link>
            </Typography>
        </form>
    );
};

export default Authorization;
