import {useState} from "react";
import classes from  "./Counter.module.scss";

export const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1)

    }

    return (
        <div>
            <div >{count}</div>
            <button className={classes.btn} onClick={incrementHandler}>increment</button>

        </div>
    );
};