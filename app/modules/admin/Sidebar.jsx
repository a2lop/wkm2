import React from 'react'
import { Icon } from '@components'

export default function Sidebar({ selectedTab = 1, setSelectedTab }) {
  const menuItems = [
    { label: 'Tu tienda', icon: 'faStore' },
    { label: 'Categorías', icon: 'faListAlt' },
    { label: 'Productos', icon: 'faBox' },
    { label: 'Estadisticas', icon: 'faChartBar' },
    { label: 'Cerrar sesión', icon: 'faUser' }
  ]

  const renderSidebarMenuItem = ({ label, icon, id }) => {
    return (
      <a
        key={id}
        onClick={() => {
          setSelectedTab(id)
        }}
        className={`py-2 px-5 flex text-white items-center ${id === selectedTab ? 'bg-green-600' : ''}`}
      >
        <div className={`w-14 mr-3 h-14 text-center ${id === selectedTab ? 'bg-white rounded-full' : ''}`}>
          <Icon icon={icon} className={`mt-3 ${id === selectedTab ? 'text-gray-500' : ''}`} size="2x" />
        </div>
        <p className="text-xl font-bold">{label}</p>
      </a>
    )
  }

  return (
    <div className="w-96 mr-4">
      <div className="bg-venderelo rounded-xl py-4">
        <div className="mb-8">
          <img className=" h-8 self-center m-auto" alt="logo" src={'/assets/logo_white.png'} />
        </div>
        {menuItems.map(({ label, icon }, id) => {
          return renderSidebarMenuItem({ label, icon, id })
        })}
      </div>
    </div>
  )
}
