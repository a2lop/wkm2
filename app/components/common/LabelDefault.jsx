import React from 'react'
import ReactTooltip from 'react-tooltip'
import Icon from './Icon'

export default function LabelDefault({ className, isOptional, text, tooltipText }) {
    return (
        <div className="flex">
            <p className={`text-black text-sm mr-1 ${className}`}>{`${text}${isOptional ? ' (opcional)' : ''}`}</p>
            {tooltipText && (
                <>
                    <span data-tip={tooltipText} className="inline-flex">
                        <Icon icon="faInfoCircle" />
                    </span>
                    <ReactTooltip place={'right'} type={'info'} effect={'solid'} />
                </>
            )}
        </div>
    )
}
