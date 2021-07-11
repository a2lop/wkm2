import React from 'react'
// import ReactTooltip from 'react-tooltip'
// import Icon from './Icon'

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText
} from '@reach/combobox'
import '@reach/combobox/styles.css'
import LabelDefault from './LabelDefault'

export default function Cbx({
    className,
    error,
    isOptional,
    label,
    name,
    register,
    placeholder = '',
    tooltipText,
    type,
    value,
    options
}) {
    const getClasses = () => {
        if (type === 'secondary') {
            return ''
        }
        return 'bg-gray-300 border-2 border-gray-300 py-2 px-1 rounded-lg w-full'
    }

    return (
        <div className={`mb-2 ${className}`}>
            {label && <LabelDefault text={label} isOptional={isOptional} tooltipText={tooltipText} />}
            <Combobox aria-label="choose a fruit" openOnFocus={true}>
                <ComboboxInput className={`${getClasses()} ${className}`} />
                <ComboboxPopover>
                    <ComboboxList>
                        {options.map((option, idx) => (
                            <ComboboxOption value={option.label} id={option.id} key={idx} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
            {error && (
                <div>
                    <p className="text-red-400">{error.message || ' Este campo es requerido'}</p>
                </div>
            )}
        </div>
    )
}
