import { TimeSetting } from "./components/components";
import { TimerName } from "../../common/common";
import './TimeSettings.scss';

const TimeSettings = ({
    isRun,
    settings,
    onSetSettings
}) => {
    const handleBreakInc = () => {
        if (isRun) {
            return;
        }
        onSetSettings(state => {
            if (state.break < 60) {
                if (state.current === TimerName.SESSION) {
                    return {
                        ...state,
                        break: state.break + 1
                    }
                }
                return {
                    ...state,
                    break: state.break + 1,
                    timer: (state.break + 1) * 60 
                }
            }
            return state;
        });
    }

    const handleBreakDec = () => {
        if (isRun) {
            return;
        }
        onSetSettings(state => {
            if (state.break > 1) {
                if (state.current === TimerName.SESSION) {
                    return {
                        ...state,
                        break: state.break - 1
                    }
                }
                return {
                    ...state,
                    break: state.break - 1,
                    timer: (state.break - 1) * 60 
                }
            }
            return state;
        });
    }

    const handleSessionInc = () => {
        if (isRun) {
            return;
        }
        onSetSettings(state => {
            if (state.session < 60) {
                if (state.current === TimerName.BREAK) {
                    return {
                        ...state,
                        session: state.session + 1
                    }
                }
                return {
                    ...state,
                    session: state.session + 1,
                    timer: (state.session + 1) * 60 
                }
            }
            return state;
        });
    }

    const handleSessionDec = () => {
        if (isRun) {
            return;
        }
        onSetSettings(state => {
            if (state.session > 1) {
                if (state.current === TimerName.BREAK) {
                    return {
                        ...state,
                        session: state.session - 1
                    }
                }
                return {
                    ...state,
                    session: state.session - 1,
                    timer: (state.session - 1) * 60 
                }
            }
            return state;
        });
    }

    return (
        <div className="time-settings">
            <TimeSetting 
                name={'Break'} 
                value={settings.break}
                onInc={handleBreakInc}
                onDec={handleBreakDec}
            />
            <TimeSetting 
                name={'Session'} 
                value={settings.session}
                onInc={handleSessionInc}
                onDec={handleSessionDec}
            />
        </div>
    );
}

export { TimeSettings };
