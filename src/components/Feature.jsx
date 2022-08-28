import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../assets/feature_1.png';
import featureimage1 from '../assets/feature_2.png';
import featureimage2 from '../assets/feature_3.png';

function Feature() {
  return (
    <div id='features'>
        <div className="a-container">
            <FeatureBox image={featureimage} title='Satu Dua Tiga' />
            <FeatureBox image={featureimage1} title='Satu Dua Tiga' />
            <FeatureBox image={featureimage2} title='Satu Dua Tiga' />
        </div>
    </div>
  )
}

export default Feature;