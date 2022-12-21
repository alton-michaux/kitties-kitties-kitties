import React, { useState } from "react";
import catFact from './utils'

const Card = () => {
    const [fact, setFact] = useState(null);

    const handleCatFact = async () => {
        const catObject = await catFact();
        setFact(catObject.fact);
    }

    return (
        <div className="kitty-card">
            <p>{fact}</p>
            <button onClick={() => { handleCatFact() }}>Click Me</button>
        </div>
    )
}

export default Card
