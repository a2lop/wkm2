import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function Icon({ icon, size }) {
    const icons = {
        faCoffee,
        faInfoCircle
    }
    return <FontAwesomeIcon icon={icons[icon]} size={size} />
}
