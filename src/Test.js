import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Test() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    }, []);
    return <div>{count}</div>;
}
