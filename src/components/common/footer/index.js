import { Col, Row } from 'antd';
import { get } from 'lodash';
import './style.scss';

const Footer = (props) => {
    return (
        <footer className='content-container Footer-root'>
            <Row className="item-wrapper" gutter={[0, 12]}>
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

            {get(props, 'copyright', false) && <p className="mt-24">{props.copyright}</p>}
        </footer>
    )
}

export default Footer;