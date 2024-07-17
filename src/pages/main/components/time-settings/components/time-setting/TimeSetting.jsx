import { 
    faArrowUp, 
    faArrowDown 
} from '@fortawesome/free-solid-svg-icons';
import { TimerName } from '../../../../common/common';
import { IconButton } from '../../../../../../components/components';
import './TimeSetting.scss';

const TimeSetting = ({
    name,
    value,
    onInc,
    onDec
}) => {
    return (
        <section className='time-setting'>
            <h2 
                id={`${name === TimerName.BREAK ? 'break' : 'session'}-label`} 
                className='time-setting__name'
            >{name}</h2>
            <div className='time-setting__control'>
                <IconButton 
                    id={`${name === TimerName.BREAK ? 'break' : 'session'}-increment`}
                    icon={faArrowUp}
                    onClick={onInc}
                />
                <p
                    id={`${name === TimerName.BREAK ? 'break' : 'session'}-length`}
                    className='time-setting__length'
                >{value}</p>
                <IconButton
                    id={`${name === TimerName.BREAK ? 'break' : 'session'}-decrement`} 
                    icon={faArrowDown}
                    onClick={onDec}
                />
            </div>
        </section>
    );
}

export { TimeSetting };
