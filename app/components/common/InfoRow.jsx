import React from 'react'
import ReactTooltip from 'react-tooltip'
import Icon from './Icon'

export default function InfoRow({ className, label, text }) {
  return (
    <div className="flex">
      <p className={`text-black text-lg mr-1 font-bold uppercase ${className}`}>{text}:</p>
      <p className="text-lg text-gray-600">{text}</p>
    </div>
  )
}
