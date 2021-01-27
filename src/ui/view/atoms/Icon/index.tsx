import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: 'medium' | 'small';
    spin?: boolean;

}

const Icon: React.FC<IconProps> = (props) => {
    const { children, className, size, spin,...iconProps } = props;
    return (
        <svg
            className={classnames(
                classes['icon'],
                size !== 'medium' && classes[`icon-${size}`],
                spin && classes['icon-spin'],
                className
            )}
            {...iconProps}
            viewBox="0 0 48 48"
        >
            {children}
            <div></div>
        </svg>
    );
};

export default Icon;
