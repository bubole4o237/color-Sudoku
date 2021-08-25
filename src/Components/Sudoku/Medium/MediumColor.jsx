
const MediumColor = () => {

    return (
        <div>

            <span id='spanRed'>
                <input type="radio" id="red" name="drone" value="red" />
                <label htmlFor="red">Red</label>
            </span>
            <span id='spanBlue'>
                <input type="radio" id="blue" name="drone" value="blue" />
                <label htmlFor="blue">Blue</label>
            </span>
            <span id='spanGreen'>
                <input type="radio" id="green" name="drone" value="green" />
                <label htmlFor="green">Green</label>
            </span>
            <br />
            <span id='spanYellow'>
                <input type="radio" id="yellow" name="drone" value="yellow" />
                <label htmlFor="yellow">Yellow</label>
            </span>
            <span id='spanGrey'>
                <input type="radio" id="grey" name="drone" value="grey" />
                <label htmlFor="grey">Grey</label>
            </span>
            <br />
            <span id='spanErase'>
                <input type="radio" id="erase" name="drone" value="" />
                <label htmlFor="erase">Erase</label>
            </span>

        </div>
    );
}

export default MediumColor;
