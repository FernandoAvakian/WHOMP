import React, { useCallback, useState } from 'react';
import { Transition } from '@headlessui/react';
import { BellSnoozeIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Banner = ({ children, cookieName }: { children: React.ReactNode; cookieName: string }) => {
  const hasBeenClosed = localStorage.getItem(cookieName);
  const [isHidden, setIsHidden] = useState<boolean>(hasBeenClosed === 'true');

  const handleClick = useCallback(() => {
    localStorage.setItem(cookieName, 'true');
    // Don't show again in session the user closes it
    setIsHidden(!isHidden), [isHidden];
  }, [cookieName, isHidden]);

  return (
    <Transition
      show={!isHidden}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex px-10 py-2.5 bg-warn space-x-4">
        <BellSnoozeIcon className="h-4 w-4 text-gray-dark" />
        <div className="grow font-sans text-gray-dark text-xs">{children}</div>
        <button
          className="flex items-center justify-center rounded-full h-4 w-4 bg-white border border-gray-dark overflow-hidden"
          onClick={handleClick}
        >
          <XMarkIcon className="h-4 w-4 text-gray-dark bg-white" />
        </button>
      </div>
    </Transition>
  );
};

export default Banner;
