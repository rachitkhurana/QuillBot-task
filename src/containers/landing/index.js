import './style.scss';
import HeroRightImageVideo from '../../components/common/hero-right-image-video';
import HeroCenterWithBtn from '../../components/common/hero-center-with-btn';
import { get } from 'lodash';
import "antd/dist/antd.css";
import HeroWithCircleBars from '../../components/common/hero-with-circle-bars';

const Landing = (props) => {
    return (
        <main className="Landing-root">
            {get(props, 'data.sectionThree', false) && <HeroRightImageVideo
                backgroundColor={get(props, 'data.sectionThree.backgroundColor')}
                textColor={get(props, 'data.sectionThree.textColor')}
                backgroundImage={get(props, 'data.sectionThree.backgroundImage')}
                title={get(props, 'data.sectionThree.title', false)}
                description={get(props, 'data.sectionThree.description', false)}
                image={get(props, 'data.sectionThree.image', false)}
                video={get(props, 'data.sectionThree.video', false)}
            />}
            {get(props, 'data.sectionFive', false) && <HeroCenterWithBtn
                title={get(props, 'data.sectionFive.title')}
                description={get(props, 'data.sectionFive.description')}
                buttonTitle={get(props, 'data.sectionFive.link.title')}
                buttonUrl={get(props, 'data.sectionFive.link.url')}
                backgroundImage={get(props, 'data.sectionFive.backgroundImage')}
            />}
            {get(props, 'data.sectionFour', false) && <HeroWithCircleBars
                title={get(props, 'data.sectionFour.title', false)}
                description={get(props, 'data.sectionFour.description', false)}
                items={get(props, 'data.sectionFour.items', false)}
                backgroundColor={get(props, 'data.sectionFour.backgroundColor', 'transparent')}
            />}
        </main>
    )
}

export default Landing;