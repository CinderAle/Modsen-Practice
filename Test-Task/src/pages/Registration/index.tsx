import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { constants } from "@/constants/constants";
import {
    MapLink,
    MapLinkIcon,
    RegisterButton,
    SuggestLink,
} from "@/styles/buttons";
import { AuthForm } from "@/styles/form";
import { AuthInput } from "@/styles/input";
import { AuthHeading, ErrorParagraph, SuggestParagraph } from "@/styles/text";
import { registerUser } from "@/utils/register";

const USER_EXISTS_MESSAGE = "Такой пользователь уже существует!";
const PASSWORDS_MUST_MATCH_MESSAGE = "Пароли должны совпадать!";

const Registration = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const registerEvent = async (e: FormEvent) => {
        e.preventDefault();
        if (password === repassword) {
            registerUser(login, password).then((result) => {
                if (!result) {
                    setMessage(USER_EXISTS_MESSAGE);
                }
            });
            navigate(constants.LOGIN_ROUTE);
        } else {
            setMessage(PASSWORDS_MUST_MATCH_MESSAGE);
        }
    };

    return (
        <AuthForm onSubmit={registerEvent}>
            <AuthHeading>Регистрация</AuthHeading>
            <AuthInput
                type="text"
                placeholder="login"
                onChange={(e) => setLogin(e.currentTarget.value)}
            />
            <AuthInput
                type="password"
                placeholder="pass"
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <AuthInput
                type="password"
                placeholder="repeat"
                onChange={(e) => setRepassword(e.currentTarget.value)}
            />
            <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
            <SuggestParagraph>
                Уже есть аккаунт?
                <SuggestLink to={constants.LOGIN_ROUTE}>Войти</SuggestLink>
            </SuggestParagraph>
            {message.length > 0 && <ErrorParagraph>{message}</ErrorParagraph>}
            <MapLink to={constants.MAP_ROUTE}>
                <MapLinkIcon /> Назад к карте
            </MapLink>
        </AuthForm>
    );
};

export default Registration;
