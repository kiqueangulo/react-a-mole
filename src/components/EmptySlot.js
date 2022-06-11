import React, { useEffect } from "react";

function EmptySlot(props) {
    useEffect(() => {
        let timer = setTimeout(() => {
            props.setDisplay(true)
        }, Math.floor(Math.random() * 9000));

        return () => clearTimeout(timer)
    });

    return (
        <div className="single">
            <img
                src='https://adhityabee.files.wordpress.com/2014/12/hole.png'
                alt='Empty hole'
            />
        </div>
    )
};

export default EmptySlot;