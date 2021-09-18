import { Col, Row } from 'antd';
import { get } from 'lodash';
import './style.scss';

import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const HeroWithCircleBars = (props) => {
    return (
        <section className="content-container HeroWithCircleBars-root"
            style={{backgroundColor: get(props, 'backgroundColor', 'transparent')}}>
            {get(props, 'title', false) && <h2 className="text-24 font-bold mb-12">
                {props.title}
            </h2>}
            {get(props, 'description', false) && <h2 className="text-16">
                {props.description}
            </h2>}
            {get(props, 'items', false) && <Row className="w-full bar-wrapper-row">
                {get(props, 'items', [])?.map((element, index) => {
                    return (
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} key={index} className="flex flex-col">
                                <div className="bar-container font-bold">
                                    <CircularProgressbar
                                        strokeWidth={2}
                                        styles={buildStyles({
                                            textColor: 'black',
                                            pathColor: '#2cb673',
                                            trailColor: '#f2f2f2'
                                        })}
                                        value={get(element, 'percentage', 50)}
                                        text={`${get(element, 'percentage', 50)}%`} />
                                </div>
                                {get(element, 'description', false) && <p className="bar-description">
                                        {element.description}
                                </p>}
                        </Col>
                    )
                })}
            </Row>}
        </section>
    )
}

export default HeroWithCircleBars;