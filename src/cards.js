import React, { useState, useEffect } from "react";
import { catFact, getRandomCatImage } from './utils'

const Card = () => {
    const [fact, setFact] = useState(null);
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null)

    const handleCatFact = async () => {
        setLoading(true);
        const catObject = await catFact();
        await handleCatImage();
        setFact(catObject.fact);
        setLoading(false);
    }

    const handleCatImage = async () => {
        setLoading(true);
        const catPicture = await getRandomCatImage();
        setImage(catPicture);
        setLoading(false);
    }

    const handleInitialLoad = async () => {
        setLoading(true);
        const catObject = await catFact();
        const catPicture = await getRandomCatImage();
        setImage(catPicture);
        setFact(catObject.fact);
        setLoading(false);
    }

    useEffect(() => {
        handleInitialLoad();
    }, [])

    return (
        <div className="kitty-card">
            {loading ?
                <p> Loading...</p> :
                <>
                    <img className="kitty-image" src={image} alt="kitties" />
                    <p>{fact}</p>
                    <button onClick={() => { handleCatFact() }}>Click Me</button>
                </>
            }
        </div>
    )
}

export default Card
