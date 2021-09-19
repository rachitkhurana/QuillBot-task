import { Col, Row } from 'antd';
import { get } from 'lodash';
import './style.scss';

import { Collapse } from 'antd';

const { Panel } = Collapse;


const Footer = (props) => {
    return (
        <footer className='content-container Footer-root'>
            <Row className="item-wrapper" gutter={[24, 8]}>
                {get(props, 'items', []).map((element, index) => {
                    return (
                        <Col
                            span={4}
                            key={index}
                        >
                            <h5 className="text-12 font-bold">{get(element, 'title', '')}</h5>
                            {get(element, 'links', []).map((linkElement, linkIndex) => {
                                return (
                                    <a href={get(linkElement, 'url', '/')}
                                        key= {linkIndex}
                                        className="text-14">
                                            {get(linkElement, 'image', false) && <img src={linkElement.image} />}
                                            {linkElement.title}
                                    </a>
                                )
                            })}
                        </Col>
                    )
                })}
            </Row>

            <div className="w-full item-wrapper-mobile">
                <Collapse defaultActiveKey={[0]} ghost accordion expandIconPosition="right">
                    {get(props, 'items', [])?.map((element, index) => {
                        return (
                            <Panel header={get(element, 'title', '')} key={index}>
                                {get(element, 'links', []).map((linkElement, linkIndex) => {
                                    return (
                                        <a href={get(linkElement, 'url', '/')}
                                            key= {linkIndex}
                                            className="text-14">
                                                {get(linkElement, 'image', false) && <img src={linkElement.image} />}
                                                {linkElement.title}
                                        </a>
                                    )
                                })}
                            </Panel>    
                        );
                        })}
                </Collapse>
            </div>

            {get(props, 'copyright', false) && <p className="mt-24 copyright-text">{props.copyright}</p>}
        </footer>
    )
}

export default Footer;