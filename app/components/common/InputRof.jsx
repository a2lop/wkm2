import React from 'react'
import LabelDefault from './LabelDefault'

export default function InputRof({
    className,
    required,
    requiredLabel = 'Este campo es requerido',
    label,
    name,
    register,
    placeholder = '',
    tooltipText,
    type,
    error
}) {
    const getClasses = () => {
        if (type === 'secondary') {
            return ''
        }
        return 'bg-gray-200 border-2 border-gray-200 py-2 px-1 rounded-lg w-full'
    }

    const getRequiredLabel = () => {
        return required ? requiredLabel : false
    }

    return (
        <div className={`mb-2 ${className}`}>
            {label && <LabelDefault text={label} isOptional={!required} tooltipText={tooltipText} />}
            <input
                className={`${getClasses()} `}
                placeholder={placeholder}
                {...register(name, { required: getRequiredLabel() })}
                // ref={...register(name)}
                // name={name}
                // type={'text'}
                // value={value}
                // data-for="tooltip"
                // data-tip={tooltipText}
                // onChange={onChange}
            />
            {error && (
                <div>
                    <p className="text-red-400">{error.message || ' Este campo es requerido'}</p>
                </div>
            )}
        </div>
    )
}
