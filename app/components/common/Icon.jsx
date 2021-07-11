import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBox,
    faCamera,
    faCoffee,
    faEnvelope,
    faInfoCircle,
    faPencilAlt,
    faShareAlt,
    faTimes,
    faStore,
    faListAlt,
    faEye,
    faEyeSlash,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Icon({ icon, size, color, onClick, className }) {
    const icons = {
        faBox,
        faCamera,
        faCoffee,
        faEnvelope,
        faEye,
        faEyeSlash,
        faFacebook,
        faInfoCircle,
        faInstagram,
        faListAlt,
        faPencilAlt,
        faShareAlt,
        faStore,
        faTimes,
        faTrash
    }
    return (
        <div className={className}>
            <FontAwesomeIcon icon={icons[icon]} size={size} color={color} onClick={onClick} />
        </div>
    )
}
