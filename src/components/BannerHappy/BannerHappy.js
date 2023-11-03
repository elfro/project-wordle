import React from 'react';

function BannerHappy({ count }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{count} guesses</strong>.
      </p>
    </div>
  );
}

export default BannerHappy;
