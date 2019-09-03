import React from 'react';

import { IconDefinition } from 'gillicons/icon-definition';

export interface GilliconProps {
    className?: string;
    icon: IconDefinition;
    onClick: () => any;
    style?: React.CSSProperties;
}

const Gillicon = ({ className, icon, onClick, style }: GilliconProps) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            height={'1em'}
            name={icon.name}
            onClick={onClick}
            style={style}
            viewBox={icon.viewBox}
            width={icon.width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={icon.svgPath}
                fillRule="evenodd" />
        </svg>
    );
};

export default Gillicon;
