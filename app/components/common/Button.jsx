import React from 'react'

export default function Button({ type, onClick, text, className, id = '', isLoading, children }) {
    const getClasses = () => {
        if (type === 'secondary') {
            return 'border-2 border-venderelo px-8 py-1 bg-white rounded-lg text-venderelo font-bold'
        }
        return 'bg-venderelo text-white rounded-lg border-none px-8 py-1 '
    }

    return (
        <button id={id} className={`${getClasses()} ${className} h-8 focus:outline-none`} onClick={onClick}>
            {isLoading ? <img className="w-12" src="/assets/loading.svg" /> : <>{children || text}</>}
        </button>
    )
}
