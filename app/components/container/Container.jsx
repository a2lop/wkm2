import React from 'react'

export default function Container({ children, type }) {
    const getClasses = () => {
        if (type === 'naked') {
            return ''
        }
        return 'border border-gray-200 px-3 py-2 ro'
    }
    return <div className={`bg-white rounded-lg ${getClasses()}`}>{children}</div>
}
