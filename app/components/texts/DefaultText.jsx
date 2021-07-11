import React from 'react'

export default function DefaultText({ className, children }) {
    return (
        <>
            <p className={`text-gray-500 ${className}`}>{children}</p>
        </>
    )
}
