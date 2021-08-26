import { Route, Switch } from 'react-router-dom';

import Sudoku from './Components/Sudoku/Sudoku';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {

    return (
        <div className="App">
            <div className="main">

                <Header />

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/difficulty/level/easy' component={Sudoku} />
                    <Route path='/difficulty/level/medium' component={Sudoku} />
                    <Route path='/difficulty/level/hard' component={Sudoku} />
                    <Route path='/difficulty/level/pro' component={Sudoku} />
                </Switch>

                <Footer />

            </div>
        </div>
    );
}

export default App;
