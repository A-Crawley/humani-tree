import React, {ButtonHTMLAttributes, useCallback} from "react";
import {twMerge} from "tailwind-merge";

const Button = ({
                    onClick,
                    className,
                    variant = 'm',
                    children,
                    ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 's' | 'm' | 'l'
}) => {

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e)
    }, [onClick])

    return (
        <button
            type="button"
            {...props}
            onClick={handleClick}
            className={twMerge(
                className,
                variant === 's' && 'px-1 py-0 rounded-sm text-sm',
                variant === 'm' && 'px-2 py-1 rounded-md text-md',
                variant === 'l' && 'px-3 py-2 rounded-lg text-lg',
                'border-[0.5px] border-slate-900/50 bg-slate-400/50 text-black font-500',
                'hover:border-slate-900/70 hover:bg-slate-400/60',
                'cursor-pointer',
                'active:border-slate-900/90 active:bg-slate-400/70',
            )}
        >
            {children}
        </button>
    );
}

export default Button;