import { useState, useEffect } from 'react';

import './Win.css';



const Win = (props) => {

    const [message, setMessage] = useState('');

    const onClickWinDivHandler = () => {
        props.setShowWin(false);
    }

    useEffect(() => {
        setMessage(props.text);
    }, [props.text]);


    return (
        <div className='winDiv' onClick={onClickWinDivHandler}>
            <p>You <b style={{ color: "blue" }}>WIN</b> the <b style={{ color: "blue" }}>C</b>
                <b style={{ color: "darkorange" }}>o</b>
                <b style={{ color: "green" }}>l</b>
                <b style={{ color: "hotpink" }}>o</b>
                <b style={{ color: "red" }}>r </b>
                <b>Sudoku!</b></p>
            <p>
                <b style={{ color: "blue" }}>C</b>
                <b style={{ color: "darkorange" }}>O</b>
                <b style={{ color: "green" }}>N</b>
                <b style={{ color: "hotpink" }}>G</b>
                <b style={{ color: "red" }}>R</b>
                <b style={{ color: "blue" }}>A</b>
                <b style={{ color: "darkorange" }}>T</b>
                <b style={{ color: "green" }}>U</b>
                <b style={{ color: "hotpink" }}>L</b>
                <b style={{ color: "red" }}>A</b>
                <b style={{ color: "blue" }}>T</b>
                <b style={{ color: "darkorange" }}>I</b>
                <b style={{ color: "green" }}>O</b>
                <b style={{ color: "hotpink" }}>N</b>
                <b style={{ color: "red" }}>S</b>
                <b style={{ color: "blue" }}>!</b>
            </p>
            {message ? <p>You did it for<br />{message}</p> : null}
        </div>
    );
}

export default Win;
