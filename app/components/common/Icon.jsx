import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBox,
  faCamera,
  faChartBar,
  faCoffee,
  faEllipsisH,
  faEnvelope,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faListAlt,
  faPencilAlt,
  faShareAlt,
  faStore,
  faTimes,
  faTrash,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Icon({ icon, size, color, onClick, className }) {
  const icons = {
    faBox,
    faCamera,
    faChartBar,
    faCoffee,
    faEllipsisH,
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
    faTrash,
    faUser
  }
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icons[icon]} size={size} color={color} onClick={onClick} />
    </div>
  )
}
