import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlay,
    faStop,
    faArrowsSpin 
} from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../../../../components/components';
import './ControlPanel.scss';

const ControlPanel = ({
    onStart,
    onReset
}) => {
    return (
        <section className='control-panel'>
            <button id="start_stop" className='icon-button' onClick={onStart}>
                <FontAwesomeIcon icon={faPlay} className='icon' />
                <FontAwesomeIcon icon={faStop} className='icon' />
            </button>
            <IconButton id="reset" icon={faArrowsSpin} onClick={onReset} />
        </section>
    );
};

export { ControlPanel };
