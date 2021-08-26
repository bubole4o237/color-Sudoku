import { useState } from 'react';
import { Link } from 'react-router-dom';
import Win from '../Win/Win';
import Timer from '../Timer/Timer';
import Easy from './Easy/Easy';
import EasyColor from './Easy/EasyColor';
import Medium from './Medium/Medium';
import MediumColor from './Medium/MediumColor';
import Hard from './Hard/Hard';
import HardColor from './Hard/HardColor';
import Pro from './Pro/Pro';
import ProColor from './Pro/ProColor';
import './Sudoku.css';

const Sudoku = (props) => {

    let sudokuPath = '';
    if (props.history.location.pathname.includes('easy')) {
        sudokuPath = 'easy';
    } else if (props.history.location.pathname.includes('medium')) {
        sudokuPath = 'medium';
    } else if (props.history.location.pathname.includes('hard')) {
        sudokuPath = 'hard';
    } else if (props.history.location.pathname.includes('pro')) {
        sudokuPath = 'pro';
    }

    const [dye, setDye] = useState('');
    const [showWin, setShowWin] = useState(false);
    const [win, setWin] = useState(false);
    const [reset, setReset] = useState(true);
    const [stop, setStop] = useState(false);
    const [timerOn, setTimerOn] = useState(true);
    // const [check, setCheck] = useState(false); // "check" is used to refresh the data on page to some variables

    const [winTimeMessage, setWinTimeMessage] = useState('');

    const allBoxes = document.getElementsByClassName('cube');

    const onClickClearAllHandler = () => {
        setReset(true);
        setStop(false);
        setWin(false);
        setShowWin(false);
        setWinTimeMessage('');
        for (let b = 0; b < allBoxes.length; b++) {
            allBoxes[b].style.backgroundColor = '';
            allBoxes[b].innerHTML = '';
            allBoxes[b].className = allBoxes[b].className.split(' locked').join(' ').trim(' ');

        }
    }

    const onClickTurnOnTimerHandler = () => {
        if (timerOn) {
            setTimerOn(false);
            onClickClearAllHandler();
        } else {
            setTimerOn(true);
            onClickClearAllHandler();

        }
    }

    const onClickColorPickerHandler = (e) => {
        if (e.target.value !== undefined) { /////// to not pick undefined color
            setDye(e.target.value);
            console.log(dye);
        }
    }

    const onClickBoxHandler = (e) => {
        if (win) {
            return;
        }

        setReset(false);

        /////// To avoid selecting and coloring the whole desk 'SUDOKU' 
        /////// or selecting and coloring whole row of the desk
        if ((e.target.className === 'sudoku') ||
            (e.target.className.includes('line')) ||
            (e.target.className === 'boxContent') ||
            (e.target.className === 'emptyDiv')) {
            return;
        }

        /////// Getting the className of selected box
        const boxClasses = e.target.className.split(' ');
        const targetRow = document.getElementsByClassName([boxClasses[0]]);
        const targetColum = document.getElementsByClassName([boxClasses[2]]);

        /////// If the selected box has a className="locked" the function will stop execution
        if (boxClasses[3]) {
            return;
        }

        /////// This is the logic to COLOR or NOT the selected box
        if (dye) {
            if (e.target.style.backgroundColor === 'black') {
                e.target.style.backgroundColor = '';
                return;
            }

            if (e.target.style.backgroundColor === dye) {
                e.target.style.backgroundColor = '';
                return;
            }

            for (let i = 0; i < targetRow.length; i++) {
                if (targetRow[i].style.backgroundColor === dye) {
                    e.target.style.backgroundColor = 'black';
                    return;
                }
            }

            for (let i = 0; i < targetColum.length; i++) {
                if (targetColum[i].style.backgroundColor === dye) {
                    e.target.style.backgroundColor = 'black';
                    return;
                }
            }


        }

        e.target.style.backgroundColor = dye;

        for (let b = 0; b < allBoxes.length; b++) {
            if ((allBoxes[b].style.backgroundColor === '') || (allBoxes[b].style.backgroundColor === 'black')) {
                setWin(false);
                setShowWin(false);
                setStop(false);

                console.log("hahahahaha Spiaiha te");
                return;
            } else {
                setWin(true);
                setShowWin(true);
                setStop(true);
                console.log('OPPA');
                setStop(true);
            }
        }

        if (win) {
            console.log('YOU WIN THE COLOR SUDOKU');
        }
    }

    const onClickStartHandler = (e) => {
        // if (check) {
        //     setCheck(false);
        // } else {
        //     setCheck(true);
        // }
        setWin(false);
        setShowWin(false);
        setReset(true);
        setStop(false);

        let colorObject = {
            1: 'red',
            2: 'blue',
            3: 'yellow',
            4: 'green',
            5: 'grey',
            6: 'hotpink',
            7: 'orange',
            8: 'purple',
            9: 'brown'
        };

        let colorArrayValue = [];
        let colorValue = 0;

        let firstRowBoxes = document.getElementsByClassName('firstRow');
        let multiplier = firstRowBoxes.length;

        /////// Create an array of 5 elements witch contains the numbers from 1 to 5 - randomly 
        do {
            colorValue = Math.ceil((Math.random()) * multiplier);
            if (!(colorArrayValue.includes(colorValue))) {
                colorArrayValue.push(colorValue);
            }

        } while (colorArrayValue.length < (multiplier === 3 ? 2 : multiplier));


        /////// Clear all boxes
        for (let b = 0; b < allBoxes.length; b++) {
            allBoxes[b].style.backgroundColor = '';
            allBoxes[b].innerHTML = '';
            allBoxes[b].className = allBoxes[b].className.split(' locked').join(' ').trim(' ');
        }

        /////// Create initial boxes to start the game
        for (let i = 0; i < colorArrayValue.length; i++) {
            let randomNumber = Math.floor((Math.random()) * multiplier * multiplier);

            allBoxes[randomNumber].style.backgroundColor = colorObject[colorArrayValue[i]];
            allBoxes[randomNumber].innerHTML = '<p class="boxContent">@</p>';
            allBoxes[randomNumber].className = allBoxes[randomNumber].className + ' locked';
        }

    }


    return (
        <div>

            <div className='backButton'>
                <Link to='/'>
                    <p className='titleParagraph buttonP'>Home page
                    </p>
                </Link>
            </div>
            <div>
                <p className='titleParagraph buttonP' onClick={onClickStartHandler}>New game</p>
                <p className='titleParagraph buttonP' onClick={onClickClearAllHandler}>Clear all</p>
            </div>

            <div className='timerOnOff' onClick={onClickTurnOnTimerHandler}>{timerOn ? <>Turn <b>OFF</b> timer</> : <>Turn <b>ON</b> timer</>}</div>

            {timerOn ? <Timer reset={reset} stop={stop} setWinTimeMessage={setWinTimeMessage} /> : null}

            {showWin ? <Win setShowWin={setShowWin} text={winTimeMessage} /> : null}

            <div className='sudoku' onClick={onClickBoxHandler}>

                {(sudokuPath === 'easy')
                    ? <Easy /> : (sudokuPath === 'medium')
                        ? <Medium /> : (sudokuPath === 'hard')
                            ? <Hard /> : (sudokuPath === 'pro')
                                ? <Pro /> : null}

            </div>

            <div className='colorPicker'>
                <div onClick={onClickColorPickerHandler}>

                    {(sudokuPath === 'easy')
                        ? <EasyColor /> : (sudokuPath === 'medium')
                            ? <MediumColor /> : (sudokuPath === 'hard')
                                ? <HardColor /> : (sudokuPath === 'pro')
                                    ? <ProColor /> : null}

                </div>
            </div>

        </div>
    );
}

export default Sudoku;