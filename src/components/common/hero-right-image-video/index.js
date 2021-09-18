import { get } from "lodash";
import "./style.scss";
import { Row, Col } from "antd";
import { useState } from "react";

const HeroRightImageVideo = (props) => {

    const [videoShowing, setVideoShowing] = useState(false);

  return (
    <section
      className="content-container HeroRightImageVideo-root w-full"
      style={{
        backgroundColor: get(props, "backgroundColor", "transparent"),
        backgroundImage: `url(${get(props, "backgroundImage", "")})`,
        color: get(props, "textColor", 'black'),
      }}
    >
      <Row className="w-full align-center">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
          className="section-details"
        >
          {get(props, "title", false) && (
            <h3 className="font-bold text-24 mb-18" style={{color: get(props, "textColor", 'black')}}>{props.title}</h3>
          )}
          {get(props, "description", false) && (
            <p className="text-16">{props.description}</p>
          )}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
          className="img-video flex"
        >
          {!videoShowing && <img className="img-vid-container" src={get(props, "image", "")} onClick={() => setVideoShowing(true)} />}
          {get(props, 'video', false) && videoShowing && <iframe width="560" height="315" className="img-vid-container" src={`${get(props, 'video', '')}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        </Col>
      </Row>
    </section>
  );
};

export default HeroRightImageVideo;

{
  /* <Row className="w-full align-center">
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="section-details">
        {get(props, 'title', false) && <h3 className="font-bold text-20 mb-20">
            {props.title}
        </h3>}
        {get(props, 'description', false) && <p className="text-16">
            {props.description}
        </p>}
    </Col>
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="img-video flex">
        <img className="img-vid-container" src={get(props, 'image', '')} />
    </Col> */
}
