import { get } from 'lodash';
import { useEffect, useState } from 'react';
import './style.scss';

const ImagesFader = ({images, shadow}) => {
    const [activeImage, setActiveImage] = useState(0);

    const animationDuration = 400;

    let intervalId;

    useEffect(() => {
        intervalId = setInterval(() => {
            // TODO: this logic
            // setTimeout(() => {
                console.log(activeImage);
                const newState = activeImage > images.length - 1 ? 0 : activeImage + 1;
                setActiveImage(newState);
            // }, 1000);
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="flex justify-center ImagesFader-root w-full">
            <div className="thing-container">
                {images?.map((element, index) => {
                    return (
                        <img key={index} src={element}
                            className={`${shadow ? 'shadow' : ''}`}
                            style={{
                                animationDuration: animationDuration,
                                animationName: index == activeImage ? 'img-enter' : 'img-exit'
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ImagesFader;