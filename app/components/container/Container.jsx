import React from 'react'

export default function Container({ children, type, title = '', description = '' }) {
  const getClasses = () => {
    if (type === 'naked') {
      return ''
    }
    return 'border border-gray-200 p-4 ro'
  }
  return (
    <div className={`bg-white rounded-lg w-full pt ${getClasses()}`}>
      <p className="text-3xl">{title}</p>
      <p>{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}
