import React from 'react'
import { Container, Icon } from '@components'
import LabelDefault from 'app/components/common/LabelDefault'
import InfoRow from 'app/components/common/InfoRow'
import AdminInfo from './AdminInfo'

export default function AdminStoreInfo({}) {
  const data = [
    { label: 'Nombre', info: 'El Cap Quito' },
    { label: 'Dirección', info: 'Av. 10 de agosto' },
    { label: 'Teléfonos', info: '0984999880' },
    {
      label: 'Descripción',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    }
  ]

  return (
    <Container title="Tu tienda" description="Esta es toda la información visible de tu tienda">
      <div className=" justify-center align-middle content-center">
        <AdminInfo info={data} />
      </div>
    </Container>
  )
}
