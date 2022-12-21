import React, { useState } from "react";
import catFact from './utils'

const Card = () => {
    const [fact, setFact] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleCatFact = async () => {
        setLoading(true)
        const catObject = await catFact();
        setLoading(false)
        setFact(catObject.fact);
    }

    return (
        <div className="kitty-card">
            {loading ?
                <p> Loading...</p> :
                <>
                    <p>{fact}</p>
                    <button onClick={() => { handleCatFact() }}>Click Me</button>
                </>
            }
        </div>
    )
}

export default Card
