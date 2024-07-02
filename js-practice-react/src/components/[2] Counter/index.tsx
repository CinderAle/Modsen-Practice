import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div style={{ fontSize: "32px", margin: "20px auto", width: "400px" }}>
            <button
                style={{
                    color: "#fff",
                    backgroundColor: counter > 10 ? "#b8514f" : "#61c990",
                    borderRadius: "10px",
                    padding: "5px",
                    fontSize: "30px",
                    cursor: "pointer",
                    marginRight: "10px",
                }}
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Increase
            </button>
            {counter}
        </div>
    );
};

export default Counter;
