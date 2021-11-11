import React from 'react'
import { Container, Icon } from '@components'

export default function AdminInfo({ info }) {
  return (
    <table className="table-fixed place-self-center">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {info.map(data => (
          <tr className="border-b-8 border-white">
            <td className="align-top">
              <p className={`text-black text-lg mr-1 font-bold uppercase`}>{data.label}:</p>
            </td>
            <td className="flex-1">
              <p className="text-lg text-gray-600">{data.info}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
