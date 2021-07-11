import React from 'react'
import Icon from '../common/Icon'

export default function LinkWithIcon({ className, children, icon, link }) {
    return (
        <div className={`text-gray-500 flex ${className}`}>
            <Icon icon={icon} size="1x" className="mr-2" />
            <a href={link} target="_blank">
                {children}
            </a>
        </div>
    )
}
