import React from 'react';
import logo from './logo.svg';
import './App.css';
import { KeyBoard } from './components/keyboard/keyboard';
import { Action } from './components/actions/action';
import { Display } from './components/display/dispplay';
import { Info } from './components/info/info';

function App() {
    const template = (
        <div className="container">
            <Info />
        </div>
    );

    return template;
}

export default App;
