import { registerUser } from "@/utils/register";
import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const Registration = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const registerEvent = async (e: FormEvent) => {
        e.preventDefault();
        registerUser(login, password).then((result) => {
            console.log(result);
        });
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
        </form>
    );
};

export default Registration;
