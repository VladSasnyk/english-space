/* eslint-disable react/prop-types */

import Collapsible from 'react-collapsible';
import { useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";



const QuestionsItem = ({ children, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='questionItem w-full border-b-2 border-green-800 text-3xl max-md:text-2xl flex cursor-pointer justify-between pb-4 max-sm:text-lg' onClick={handleToggle}>
            <Collapsible trigger={trigger} open={isOpen}>
                <p className='text-lg py-4 max-sm:text-base'>{children}</p>
            </Collapsible>
            <p className='text-[#3F7B5B] text-4xl hover:text-green-700/50 pl-4 max-sm:text-xl'>
                {isOpen ? <FaMinusCircle /> : <FaCirclePlus />
                }
            </p>
        </div>
    );
};

export default QuestionsItem;