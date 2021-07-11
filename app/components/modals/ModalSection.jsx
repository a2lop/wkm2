import React from 'react'



export default function ModalSection({ label, children, hideDivider }) {
    return (
        <div>
            <div className="flex py-2 px-3">
                <div className="w-1/5 mr-2">
                    <p className={'font-bold uppercase'}>{label}</p>
                </div>
                <div className="w-4/5">{children}</div>
            </div>
            {!hideDivider && <hr className="my-2 border-gray-500 border-t-2" />}
        </div>
    )
}
