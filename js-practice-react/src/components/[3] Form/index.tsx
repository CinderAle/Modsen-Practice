import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
    const [text, setText] = useState("");

    const submitForm = (e: FormEvent) => {
        console.log(text);
        e.preventDefault();
    };

    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };

    return (
        <form
            onSubmit={submitForm}
            style={{
                margin: "50px auto",
                width: "400px",
            }}
        >
            <input
                type="text"
                onChange={changeText}
                style={{ fontSize: "24px", margin: "10px 0" }}
            />
            <button
                type="submit"
                style={{
                    fontSize: "24px",
                    padding: "10px",
                    borderRadius: "10px",
                    outline: "none",
                    border: "2px",
                    borderColor: "#fff",
                    cursor: "pointer",
                    margin: "10px 0",
                }}
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
