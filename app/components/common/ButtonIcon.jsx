import React from 'react'
import Icon from './Icon'

export default function ButtonIcon({ type, onClick, icon, className, size }) {
    // const getClasses = () => {
    //     if (type === 'secondary') {
    //         return 'border-2 border-venderelo px-8 py-1 bg-white rounded-lg text-venderelo font-bold'
    //     }
    //     return 'bg-venderelo text-white rounded-lg border-none px-8 py-1'
    // }
    return (
        <button onClick={onClick} className={`focus:outline-none ${className}`}>
            <Icon icon={icon} size={size} />
        </button>
    )
}
