import React from 'react'
import LabelDefault from './LabelDefault'

export default function Input({
    className,
    error,
    isOptional,
    label,
    name,
    register,
    placeholder = '',
    tooltipText,
    type,
    value = '',
    onChange = () => {}
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
            <input
                ref={register}
                name={name}
                type={'text'}
                className={`${getClasses()} `}
                value={value}
                placeholder={placeholder}
                data-for="tooltip"
                data-tip={tooltipText}
                onChange={onChange}
            />
            {error && (
                <div>
                    <p className="text-red-400">{error.message || ' Este campo es requerido'}</p>
                </div>
            )}
        </div>
    )
}
