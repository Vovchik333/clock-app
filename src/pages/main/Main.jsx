import { useState } from "react";
import { Clock, ControlPanel, TimeSettings } from "./components/components";
import { TimerName } from "./common/common";
import { useRef } from "react";
import './Main.scss';

const Main = () => {
    const [isRun, setIsRun] = useState(false);
    const [settings, setSettings] = useState({
        break: 5,
        session: 25,
        current: TimerName.SESSION,
        timer: 25 * 60,
        intervalId: null
    });
    const beepRef = useRef(null);

    const handleSetSettings = (settings) => {
        setSettings(settings);
    }

    const handleSetIntervalId = (intervalId) => {
        setSettings(state => ({
            ...state,
            intervalId
        }));
    }

    const handleToggleRun = () => {
        setIsRun(state => !state);
    };

    const handleChangeTImer = () => {
        setSettings(state => {
            if (state.timer === 0) {
                beepRef.current.play();

                if (state.current === TimerName.BREAK) {
                    return {
                        ...state,
                        current: TimerName.SESSION,
                        timer: state.session * 60
                    };
                } else {
                    return {
                        ...state,
                        current: TimerName.BREAK,
                        timer: state.break * 60
                    };
                }
            }

            return {
                ...state,
                timer: state.timer - 1
            }
        });
    };

    const handleReset = () => {
        if (Boolean(settings.intervalId)) {
            clearInterval(settings.intervalId);
        }

        setIsRun(false);
        setSettings({
            break: 5,
            session: 25,
            current: TimerName.SESSION,
            timer: 25 * 60,
            intervalId: null
        });

        beepRef.current.pause();
        beepRef.current.currentTime = 0;
    };

    return (
        <main className="main-content">
            <h1>25 + 5 Clock</h1>
            <TimeSettings 
                isRun={isRun}
                settings={settings}
                onSetSettings={handleSetSettings}
            />
            <Clock 
                isRun={isRun}
                settings={settings}
                onChangeTimer={handleChangeTImer}
                onSetIntervalId={handleSetIntervalId}
            />
            <ControlPanel 
                onStart={handleToggleRun}
                onReset={handleReset}
            />
            <audio 
                ref={beepRef}
                id='beep' 
                preload="auto"
                src="https://cdn.pixabay.com/audio/2022/03/15/audio_de8cfb6b6e.mp3"
                crossOrigin="anonymous"
            ></audio>
        </main>
    );
}

export { Main };
