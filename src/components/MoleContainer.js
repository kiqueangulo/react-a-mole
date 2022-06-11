import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleConntainer(props) {
    let [displayMole, setDisplayMole] = useState(false);

    const handleBop = () => {
        props.setScore(props.score + 1);
        setDisplayMole(!displayMole)
    }

    return (
        <div className={props.className}>
            {
                displayMole ? 
                <Mole
                    setDisplay={setDisplayMole}
                    handleClick={handleBop}
                /> : 
                <EmptySlot
                    setDisplay={setDisplayMole}
                />
            }
        </div>
    )
};

export default MoleConntainer;