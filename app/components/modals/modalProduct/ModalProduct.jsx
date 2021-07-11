import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import ModalSection from '../ModalSection'
import TextArea from '../../common/TextArea'
import Button from '../../common/Button'
import ModalHeader from '../ModalHeader'
import ImagePicker from '../../common/ImagePicker'
import fire from '../../../../config/firebase'
import Cbx from '../../common/Cbx'

export default function ModalProduct({ isOpen, closeModal }) {
    const [categories, setCategories] = useState([{ id: 1, label: 'Alimentos' }])

    const { register, handleSubmit, watch, errors, getValues } = useForm()

    const productImage = watch('productImage')

    useEffect(() => {
        console.log('==errors', errors)
    }, [errors])

    const onSubmit = () => {
        console.log('SUBMIT', getValues())
        const values = getValues()

        // fire.firestore().collection('stores').doc('33mia5Ex0noh0ZtiDVej').update(values)
    }

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={{}} style={{ content: { padding: 0 } }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader label="Nuevo producto" closeModal={closeModal} />

                    <ModalSection label={'Descripción'}>
                        <Input
                            label="Nombre del producto/servicio"
                            register={register({ required: false })}
                            name="name"
                            error={errors.name}
                            tooltipText="Sample"
                        />

                        <div className="flex">
                            <Cbx
                                options={categories}
                                className="w-full pr-2"
                                label="Categoría"
                                register={register({ required: false })}
                                name="category"
                                error={errors.category}
                            />
                            {/* <Input
                                className="w-full pr-2"
                                label="Categoría"
                                register={register({ required: true })}
                                name="category"
                                error={errors.category}
                            /> */}
                            <Input
                                className="w-full pl-2"
                                label="Precio"
                                register={register({ required: false })}
                                name="price"
                                error={errors.price}
                            />
                        </div>
                    </ModalSection>

                    <ModalSection label={'Detalles'}>
                        <div className="flex">
                            <ImagePicker
                                isOptional={true}
                                className="w-2/5"
                                label="Imagen/foto"
                                register={register}
                                name="productImage"
                                error={errors.image}
                                selectedImage={productImage}
                            />
                            <TextArea className="w-3/5 ml-4" label="Descripción" isOptional={true} />
                        </div>
                    </ModalSection>

                    <div className="flex justify-end">
                        <Button type="secondary" text="Cancelar" className="mr-2" onClick={closeModal} />
                        <Button text="Agregar" isSubmit={true} />
                    </div>
                </form>
            </Modal>
        </div>
    )
}
