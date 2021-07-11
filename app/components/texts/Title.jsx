import React from 'react'

export default function Title({ className, text, isWhite }) {
    return (
        <>
            <p className={`text-xl font-bold text-${isWhite ? `white` : `whatkom`} ${className}`}>{`${text}`}</p>
        </>
    )
}
