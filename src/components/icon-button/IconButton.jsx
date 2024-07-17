import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({
    id,
    icon,
    onClick
}) => {
    return (
        <button id={id} className='icon-button' onClick={onClick}>
            <FontAwesomeIcon icon={icon} className='icon' />
        </button>
    );
}

export { IconButton };
