const catFact = async () => {
    const result = await fetch('https://catfact.ninja/fact');
    const data = result.json();
    return data
}

export default catFact;
