import React from 'react'
import Icon from '../components/common/Icon'
import Container from '../components/container/Container'
import DefaultText from '../components/texts/DefaultText'
import LinkWithIcon from '../components/texts/LinkWithIcon'
import Subtitle from '../components/texts/Subtitle'
import Title from '../components/texts/Title'
import ProductAdmin from '../components/productAdmin/ProductAdmin'

export default function AdminProducts({}) {
    return (
        <div class="grid grid-cols-3 gap-4">
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
            <ProductAdmin />
        </div>
    )
}
