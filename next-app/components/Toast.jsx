import { useState } from 'react';

const Toast = ({ message }) => {
    const [visible, setVisible] = useState(false);

    const showToast = (msg) => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000); // Hide after 3 seconds
    };

    return (
<div
  className={`fixed left-1/2 bottom-8 transform -translate-x-1/2 min-w-[250px] bg-gray-800 text-white text-center rounded-md p-4 z-50 transition-opacity duration-500 ease-in-out 
    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
  `}
>
  {message}
</div>
    );
};

export default Toast;
