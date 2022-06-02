import { KEYBOARD } from '../../data/data';
import { Key } from './key';

export function KeyBoard() {
    const template = (
        <div className="keyboard-container">
            <ol className="keyboard">
                {KEYBOARD.map((item) => (
                    <li key={item}>
                        <Key item={item} />
                    </li>
                ))}
            </ol>
        </div>
    );

    return template;
}
