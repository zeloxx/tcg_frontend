import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalPage } from './components/GlobalPage';
import './index.css';
import { CardLibrary } from './pages/card-library/CardLibrary';
import { DeckBuilder } from './pages/deck-builder/DeckBuilder';
import { Decks } from './pages/decks/Decks';
import { Home } from './pages/home/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalPage>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/card-library' component={CardLibrary} />
                    <Route exact path='/decks' component={Decks} />
                    <Route exact path='/deck-builder/create' component={DeckBuilder} />
                    <Route exact path='/deck-builder/:id' component={DeckBuilder} />
                </Switch>
            </GlobalPage>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
