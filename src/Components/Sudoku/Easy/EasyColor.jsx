
const EasyColor = () => {

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
            <span id='spanYellow'>
                <input type="radio" id="yellow" name="drone" value="yellow" />
                <label htmlFor="yellow">Yellow</label>
            </span>
            <br />
            <span id='spanErase'>
                <input type="radio" id="erase" name="drone" value="" />
                <label htmlFor="erase">Erase</label>
            </span>

        </div>
    );
}

export default EasyColor;