import React from 'react'
import ReactTooltip from 'react-tooltip'
import Icon from './Icon'

export default function Input({ type, value, label, className, placeholder = '', hasError, tooltipText, isOptional }) {
    const getClasses = () => {
        if (type === 'secondary') {
            return ''
        }
        return 'bg-gray-300 border-2 border-gray-300 py-2 px-1 rounded-lg w-full'
    }
    return (
        <div className={`mb-2 ${className}`}>
            {label && (
                <div className="flex">
                    <p className="text-black text-sm mr-1">{`${label}${isOptional ? ' (opcional)' : ''}`}</p>
                    {tooltipText && (
                        <span data-tip={tooltipText} className="inline-flex">
                            <Icon icon="faInfoCircle" />
                        </span>
                    )}
                </div>
            )}
            <input
                type={'text'}
                className={`${getClasses()} `}
                value={value}
                placeholder={placeholder}
                data-for="tooltip"
                data-tip={tooltipText}
            />
            <ReactTooltip place={'right'} type={'info'} effect={'solid'} />
        </div>
    )
}
