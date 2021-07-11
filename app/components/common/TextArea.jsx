import React from 'react'
import LabelDefault from './LabelDefault'

export default function TextArea({
    type,
    value,
    label,
    className,
    placeholder = '',
    tooltipText,
    register,
    name,
    hasError,
    isOptional
}) {
    const getClasses = () => {
        if (type === 'secondary') {
            return ''
        }
        return 'bg-gray-200 border-2 border-gray-200 py-2 px-1 rounded-lg w-full'
    }
    return (
        <div className={`mb-2 ${className}`}>
            {label && <LabelDefault text={label} isOptional={isOptional} tooltipText={tooltipText} />}
            <textarea
                type={'text'}
                className={`${getClasses()} `}
                value={value}
                placeholder={placeholder}
                ref={register}
                name={name}
            />
            {hasError && (
                <div>
                    <p className="text-red-400">Este campo es requerido</p>
                </div>
            )}
        </div>
    )
}
