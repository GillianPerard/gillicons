import React from 'react';

import { IconDefinition } from 'gillicons/iconDefinition';

interface GilliconProps {
    className?: string;
    icon: IconDefinition;
}

const Gillicon = ({ className, icon }: GilliconProps) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            height={'1em'}
            name={icon.name}
            viewBox={icon.viewBox}
            width={icon.width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={icon.svgPath}
                fillRule="evenodd" />
        </svg >
    );
};

export default Gillicon;
