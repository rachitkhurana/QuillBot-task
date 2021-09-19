import { get } from 'lodash';
import './style.scss';

const LinkList = (props) => {
    return (
        <div className="LinkList-root">
            {get(props, 'links', [])?.map((element, index) => {
                return (
                    <a className="block link-element" href={get(element, 'url', '/')}>
                        {get(element, 'title', false) && <div className="font-bold text-18 link-title">
                            {element.title}</div>}
                        {get(element, 'description', false) && <div className="text-15 link-description">
                            {element.description}</div>}
                    </a>
                )
            })}
        </div>
    )
}
export default LinkList;