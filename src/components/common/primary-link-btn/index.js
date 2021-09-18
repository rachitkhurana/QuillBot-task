import { get } from 'lodash';
import './style.scss';

const PrimaryLinkBtn = (props) => {
    return (
        <a href={get(props, 'url', '/')} className={`font-bold text-16 rounded-4 PrimaryLinkBtn-root ${get(props, 'className', null)}`}>
            {get(props, 'title', '')}
        </a>
    )
}

export default PrimaryLinkBtn;