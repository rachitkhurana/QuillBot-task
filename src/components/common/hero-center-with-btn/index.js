import { get } from 'lodash';
import './style.scss';
import PrimaryLinkBtn from '../primary-link-btn';
import { Button } from 'antd';

const HeroCenterWithBtn = (props) => {
    return (
        <section className={`content-container relative HeroCenterWithBtn-root ${get(props, 'className', '')}`}
            style={{backgroundColor: get(props, 'backgroundColor', 'transparent'), backgroundImage: `url(${get(props, 'backgroundImage', '')})`}}>
            {get(props, 'title', false) && <h1 className="font-bold text-38 text-center mb-24">
                {props.title}
            </h1>}
            {get(props, 'description', false) && <p className="text-18 text-center mb-40">
                {props.description}
            </p>}
            <div className="button-container text-center">
                <PrimaryLinkBtn
                    title={get(props, 'buttonTitle', false)}
                    url={'/'}
                    className='btn-green'
                />
                {/* {get(props, 'buttonTitle', false) && <Button
                    varient="contained"
                    href={get(props, 'url', '/')}
                    className="font-bold btn-green">
                    {get(props, 'buttonTitle', '')}
                </Button>} */}
            </div>
        </section>
    )
}

export default HeroCenterWithBtn;