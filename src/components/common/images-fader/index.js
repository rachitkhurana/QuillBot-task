import { get } from 'lodash';
import { useEffect, useState } from 'react';
import './style.scss';

const ImagesFader = ({images, shadow}) => {
    const [activeImage, setActiveImage] = useState(0);

    const animationDuration = 500;

    let intervalId;

    const getActiveImage = () => {
        return activeImage;
    }

    useEffect(() => {
        intervalId = setTimeout(() => {
            console.log(getActiveImage(), images.length);
            console.log(getActiveImage() > images.length);

            if (getActiveImage() < images.length-1) {
                setActiveImage(getActiveImage()+1);
            } else {
                setActiveImage(0);
            }
        }, 4000);
        return () => {
            clearTimeout(intervalId)
        }
    }, [activeImage])

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