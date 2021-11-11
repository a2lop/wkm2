import React from 'react'
import { Container, Icon } from '@components'

export default function AdminStoreInfo({}) {
  const products = [
    {
      name: 'Chocolate',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      price: '1.23'
    },
    {
      name: 'Avena Nestle',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      price: '22.13'
    },
    {
      name: 'Avena Nestle',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      price: '22.13'
    },
    {
      name: 'Avena Nestle',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      price: '22.13'
    },
    {
      name: 'Avena Nestle',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      price: '22.13'
    }
  ]

  const renderRows = () => {
    return products.map(({ name, image, price }, index) => {
      return (
        <tr className={`${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
          <td className="pl-2 ">
            <div className="w-16">
              <img className="w-full" src={image} />
            </div>
          </td>
          <td className="w-full px-2">{name}</td>
          <td className="px-4">${price}</td>
          <td className="px-4">
            <Icon icon="faEllipsisH" className="" size="1x" />
          </td>
        </tr>
      )
    })
  }

  return (
    <Container title="Tu productos" description="Estos son tus productos">
      <table className="table-auto">
        <thead>
          <tr>
            <th></th>
            <th className="w-full">Producto</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        {/* <tbody>{products.map(product => renderRow(product))}</tbody> */}
        <tbody>{renderRows()}</tbody>
      </table>
    </Container>
  )
}
