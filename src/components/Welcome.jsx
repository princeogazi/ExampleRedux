import React, { useEffect, useState } from "react";

function Welcome () {
    const [name, setName] = useState("Sansa Stark")

    useEffect(() => {
        setName("")
    }, [])
        return (
            <>
                <h1>Hello {name}</h1>
                <button onClick={() => setName("Jon Snow")}>Change Name</button>
            </>
    )
};

export default Welcome;