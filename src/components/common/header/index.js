import { get } from 'lodash';
import './style.scss';

const Header = (props) => {
    return (
        <header className='flex w-full Header-root'>
            <div className='flex justify-between w-full'>
                {get(props, 'data.logo', false) && <div>
                    <img src={props.data.logo} className="logo-img" alt="logo" />
                </div>}
                {get(props, 'data.links.length') > 0 && <div>
                    {props.data.links?.map((element, index) => {
                        return (
                            <a href={get(element, 'url', '/')} className='flex h-full align-center text-14 font-bold p-8'>
                                {get(element, 'title', '')}
                            </a>
                        )
                    })}
                </div>}
            </div>
        </header>
    )
}

export default Header;