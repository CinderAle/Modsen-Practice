import { constants } from "@/constants/constants";
import { registerUser } from "@/utils/register";
import { Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const registerEvent = async (e: FormEvent) => {
        e.preventDefault();
        registerUser(login, password).then((result) => {
            console.log(result);
        });
        navigate(constants.LOGIN_ROUTE);
    };

    return (
        <form onSubmit={registerEvent}>
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
            <TextField
                type="password"
                placeholder="repeat"
                onChange={(e) => setRepassword(e.currentTarget.value)}
            />
            <Button type="submit">Register</Button>
            <Typography>
                <Link to={constants.LOGIN_ROUTE}>Log In</Link>
            </Typography>
        </form>
    );
};

export default Registration;
