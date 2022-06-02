import { SyntheticEvent } from 'react';
import { Action } from '../actions/action';
import { Display } from '../display/dispplay';
import { KeyBoard } from '../keyboard/keyboard';

export function Info() {
    // function handlerButton(ev: SyntheticEvent){

    //     let displayed = ev.target.

    // }
    let displayed = '989384728';
    const template = (
        <>
            <span className="message">Calling...</span>
            <main className="phone">
                <KeyBoard />
                <div className="actions">
                    <Display displayed={displayed} />
                    <Action />
                </div>
            </main>
        </>
    );

    return template;
}
