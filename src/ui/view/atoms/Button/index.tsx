import React from 'react';
import classnames from 'classnames';

import classes from './style.module.scss';

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'contained' | 'outlined' | 'text';
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, fullWidth, type = 'button', variant = 'text', ...buttonProps} = props;

    return (
        <button
            className={classnames(
                classes['button'],
                fullWidth && classes['button-full-width'],
                variant && classes[`button-${variant}`],
                className
            )}
            type={type}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;
