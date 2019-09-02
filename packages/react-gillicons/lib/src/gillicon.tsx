import React from 'react';

import { IconDefinition } from 'gillicons/icon-definition';

export interface GilliconProps {
    className?: string;
    icon: IconDefinition;
    style?: React.CSSProperties;
}

const Gillicon = ({ className, icon, style }: GilliconProps) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            height={'1em'}
            name={icon.name}
            style={style}
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
