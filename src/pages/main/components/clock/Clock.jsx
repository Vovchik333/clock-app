import { useEffect } from 'react';
import { getTimeFormat } from './helpers/helper';
import './Clock.scss';

const Clock = ({
    isRun,
    settings,
    onChangeTimer,
    onSetIntervalId
}) => {
    const { current, timer, intervalId } = settings;
    
    useEffect(() => {
        if (!isRun && Boolean(intervalId)) {
            clearInterval(intervalId);
        }

        if (isRun) {
            onSetIntervalId(setInterval(() => {
                onChangeTimer();
            }, 1000));
        }

        return () => clearInterval(intervalId);
    }, [isRun]);

    return (
        <section className="clock">
            <article className="clock__content">
                <h2 
                    id="timer-label" 
                    className="clock__time-name"
                >{current}</h2>
                <p 
                    id="time-left"
                    className="clock__time"
                >{getTimeFormat(timer)}</p>
            </article>
        </section>
    );
}

export { Clock };
