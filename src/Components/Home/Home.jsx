import { Link } from 'react-router-dom';
// import './Home.css';


const Home = () => {


    return (
        <div>
            <h2>Select the difficulty level.</h2>

            <Link to='/difficulty/level/easy'>
                <p className='titleParagraph buttonP'>Easy</p>
            </Link>

            <Link to='/difficulty/level/medium'>
                <p className='titleParagraph buttonP'>Medium
                </p>
            </Link>

            <Link to='/difficulty/level/hard'>
                <p className='titleParagraph buttonP'>Hard</p>
            </Link>
        </div>
    );
}

export default Home;
