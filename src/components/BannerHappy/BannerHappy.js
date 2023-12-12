import React from 'react';
import Banner from '../Banner';

function BannerHappy({ count }) {
  return (
    <Banner className="happy" isVisible>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{count === 1 ? '1 guess' : `${count} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default BannerHappy;
