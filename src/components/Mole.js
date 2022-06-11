import React, { useEffect } from "react";

function Mole({ setDisplay, handleClick }) {
    useEffect(() => {
        let timer = setTimeout(() => {
            setDisplay(false)
        }, Math.ceil(Math.random() * 3000));

        return () => clearTimeout(timer)
    });

    return (
        <div className="single">
            <img
                src='https://i.pinimg.com/originals/bd/4f/8d/bd4f8ddc8475c8be9b6f26965560804f.jpg'
                alt="Mole in a hole"
                onClick={handleClick}
            />
        </div>
    )
};

export default Mole;