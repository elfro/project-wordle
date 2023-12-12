import React from 'react';
import Banner from '../Banner';

function BannerSad({ answer }) {
  return (
    <Banner className="sad" isVisible>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default BannerSad;
