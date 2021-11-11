import React from 'react'
import Icon from '../common/Icon'

export default function MenuOption({ className, text, children, leftIcon, onClick, isActive }) {
    return (
        <div
            className={`text-white flex ${className} text-xl py-3 pl-4 border-white border-b ${isActive ? 'border-l-8' : ''}`}
            onClick={onClick}
        >
            {leftIcon && <Icon icon={leftIcon} size="1x" className="mr-4" />}
            {children}
        </div>
    )
}
