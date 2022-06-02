import { KEYBOARD } from '../../data/data';

export function Key({ item }: { item: string }) {
    const template = (
        <button
            // onClick={handlerButton()}
            value={item}
            className={item === 'delete' ? 'key big' : 'key'}
        >
            {item}
            <img
                src={
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                    (item === '0' ? 471 : item) +
                    '.png'
                }
                className="pokemon"
                alt=""
                width="50px"
            />
        </button>
    );

    return template;
}
