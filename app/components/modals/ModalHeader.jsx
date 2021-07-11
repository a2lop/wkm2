import React from 'react'
import Icon from '../common/Icon'

export default function ModalHeader({ label, hideClose, closeModal }) {
    return (
        <div className="bg-whatkom px-3 py-2 flex items-center">
            <p className="text-2xl text-white flex-1">{label}</p>
            {!hideClose && <Icon icon="faTimes" color="white" size="lg" onClick={closeModal} />}
        </div>
    )
}
