import { Col, Row } from 'antd';
import { get } from 'lodash';
import './style.scss';

const TwoCol = (props) => {
    return (
        <section className="content-container TwoCol-root">
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                    className='flex justify-center'>
                        {get(props, 'one', null)}
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                    className='flex justify-center'>
                        {get(props, 'two', null)}
                </Col>
            </Row>
        </section>
    )
}

export default TwoCol;