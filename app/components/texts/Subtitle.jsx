import React from 'react'

export default function Subtitle({ className, text }) {
    return (
        <>
            <p className={`text-black ${className}`}>{`${text}`}</p>
        </>
    )
}
