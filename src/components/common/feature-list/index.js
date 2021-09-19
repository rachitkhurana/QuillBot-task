import { Tooltip } from 'antd';
import { get } from 'lodash';
import PrimaryLinkBtn from '../primary-link-btn';
import './style.scss';
import { CheckOutlined } from '@ant-design/icons';

const FeatureList = (props) => {
    return (
        <article className={`mb-30 FeatueList-root ${get(props, 'className', '')}`}>
            {get(props, 'hint', false) && <h4 className="text-11">{props.hint}</h4>}
            {get(props, 'title', false) && <h3 className='text-24 font-bold'>{props.title}</h3>}
            {get(props, 'description', false) && <p className=' text-14 main-description'>{props.description}</p>}

            {get(props, 'buttonTitle', false) && <div className="btn-container mt-24">
                <PrimaryLinkBtn
                    className="btn-green"
                    title={get(props, 'buttonTitle', false)}
                    url={get(props, 'buttonUrl', false)}
                />
            </div>}
            {get(props, 'features', false) && <div className='mt-24 features-container'>
                {get(props, 'features', []).map((element, index) => {
                    return (
                        <Tooltip title={element.description}>
                            <p className="text-14">
                                <CheckOutlined />
                                <span className='text'>{element.title}</span>
                            </p>
                        </Tooltip>
                    )
                })}
            </div>}
        </article>
    )
}

export default FeatureList;