import React from 'react';
import { X } from 'react-feather';
import useKeyDownHook from '../../hooks/useKeyDownHook';

function Banner({ isVisible, className = '', children }) {
  const [isBannerOpen, setIsBannerOpen] = React.useState(isVisible);
  const closeBanner = React.useCallback(() => {
    setIsBannerOpen(false);
  }, []);

  useKeyDownHook('Escape', closeBanner);

  return (
    <>
      {isBannerOpen && (
        <div className={`${className} banner`}>
          {children}
          <button
            className="closeButton"
            aria-label="Dismiss message"
            aria-live="off"
            title="Close message"
            onClick={closeBanner}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default Banner;
