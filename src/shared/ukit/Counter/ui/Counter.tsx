import { useState } from 'react';
import { CounterPropsType } from '../types';
import './Counter.scss';
import { MinusIcon, PlusIcon } from '@/shared/icons';

export const Counter = ({ count = 1, className, style,  }: CounterPropsType) => {
    let [number, setNumber] = useState<number>(count);

    function increase() {
        setNumber(++number);
    }
    function decrease() {
        if (number - 1 < 1) setNumber(1);
        else setNumber(--number);
    }

    return (
        <div className={`Counter ${className}`} style={{ ...style }}>
            <button className="Counter__btn Counter__btn_minus" onClick={decrease}>
                <MinusIcon />
            </button>
            <div className="Counter__value">
                { number }
            </div>
            <button className="Counter__btn Counter__btn_plus" onClick={increase}>
                <PlusIcon />
            </button>
        </div>
    )
}