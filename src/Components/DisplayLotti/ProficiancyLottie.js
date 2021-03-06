import React from 'react';
import Lottie from 'react-lottie';
import proficiancy from '../../Assest/imges/lottie/proficiancy.json'
const ProficiancyLottie = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: proficiancy,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Lottie options={defaultOptions}
                className="proficiancyLottie"
            />
        </div>
    );
};

export default ProficiancyLottie;