import { get } from 'lodash';
import './style.scss';
import PrimaryLinkBtn from '../primary-link-btn';
import { Button } from 'antd';

const HeroCenterWithBtn = (props) => {
    return (
        <section className={`content-container relative HeroCenterWithBtn-root ${get(props, 'className', '')}`}
            style={{backgroundColor: get(props, 'backgroundColor', 'transparent'), backgroundImage: `url(${get(props, 'backgroundImage', '')})`}}>
            {get(props, 'title', false) && <h1 className="font-bold text-38 text-center mb-10">
                {props.title}
            </h1>}
            {get(props, 'description', false) && <p className="text-18 text-center mb-40">
                {props.description}
            </p>}
            {get(props, 'buttonTitle', false) && <div className="button-container text-center pt-24">
                <PrimaryLinkBtn
                    title={get(props, 'buttonTitle', false)}
                    url={'/'}
                    className='btn-green'
                />
            </div>}
        </section>
    )
}

export default HeroCenterWithBtn;