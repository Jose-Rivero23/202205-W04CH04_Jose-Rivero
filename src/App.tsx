import React from 'react';
import logo from './logo.svg';
import './App.css';
import { KeyBoard } from './components/keyboard/keyboard';

function App() {
    const template = (
        <div>
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                width="600px"
                alt=""
            />
            <div>
                <KeyBoard />
            </div>
        </div>
    );

    return template;
}

export default App;
