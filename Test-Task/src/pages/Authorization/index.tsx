import { constants } from "@/constants/constants";
import { useAction } from "@/hooks/useAction";
import { User } from "@/types/user";
import { loginUser } from "@/utils/login";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../styles/form";
import { AuthInput } from "@/styles/input";
import { AuthHeading, ErrorParagraph, SuggestParagraph } from "@/styles/text";
import {
    AuthButton,
    MapLink,
    MapLinkIcon,
    SuggestLink,
} from "@/styles/buttons";

const WRONG_CREDENTIALS_MESSAGE =
    "Не удалось войти в аккаунт! Перепроверьте логин или пароль";

const Authorization = () => {
    const [loginValue, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { login } = useAction();
    const navigate = useNavigate();

    const loginEvent = async (e: FormEvent) => {
        e.preventDefault();
        loginUser(loginValue, password).then((result) => {
            if (result) {
                login(new User(loginValue));
                navigate(constants.MAP_ROUTE);
            } else {
                setMessage(WRONG_CREDENTIALS_MESSAGE);
            }
        });
    };

    return (
        <AuthForm onSubmit={loginEvent}>
            <AuthHeading>Вход в аккаунт</AuthHeading>
            <AuthInput
                placeholder="login"
                onChange={(e) => setLogin(e.currentTarget.value)}
            />
            <AuthInput
                type="password"
                placeholder="pass"
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <AuthButton type="submit">Войти</AuthButton>
            <SuggestParagraph>
                Ещё нет аккаунта?
                <SuggestLink to={constants.REGISTER_ROUTE}>
                    Зарегистрироваться
                </SuggestLink>
            </SuggestParagraph>
            {message.length > 0 && <ErrorParagraph>{message}</ErrorParagraph>}
            <MapLink to={constants.MAP_ROUTE}>
                <MapLinkIcon /> Назад к карте
            </MapLink>
        </AuthForm>
    );
};

export default Authorization;
