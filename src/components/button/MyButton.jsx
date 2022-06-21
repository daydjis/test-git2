import React, {useState} from 'react';
import classes from "./MyBtn.css";

function MyButton(props) {

    const [count, setCount] = useState(0)
    function  increments() {
        setCount(count + 1)
    }

    function  decrements() {
        setCount(count - 1)
    }

    function  reset() {
        setCount(count * 0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <div className='Bottom_list'>
                <button onClick={increments} className="Button">Увеличить</button>
                <button onClick={decrements} className="Button">Уменьшить</button>
                <button onClick={reset} className="Button">Сбросить</button>
            </div>
        </div>
    );
}

export default MyButton;