import React, { useEffect } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import fire from '@/config/firebase'
import { Button, ImagePicker, InputRof, TextArea, ModalHeader, ModalSection } from '@/components/index'

export default function ModalAddCategory({ isOpen, closeModal }) {
    const { register, handleSubmit, watch, errors, getValues } = useForm()

    useEffect(() => {
        console.log('==errors', errors)
    }, [errors])

    const onSubmit = () => {
        console.log('SUBMIT', getValues())
        const values = getValues()

        fire.firestore().collection('stores').doc('33mia5Ex0noh0ZtiDVej').update(values)
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={{}}
                contentLabel="Example Modal"
                style={{ content: { padding: 0 } }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader label="Nueva categoría" closeModal={closeModal} />

                    <ModalSection label={'Categoría'}>
                        <InputRof
                            label="Nombre de categoría"
                            register={register({ required: true })}
                            name="name"
                            error={errors.name}
                        />
                    </ModalSection>

                    <div className="flex justify-end">
                        <Button type="secondary" text="Cancelar" className="mr-2" onClick={closeModal} />
                        <Button text="Guardar" isSubmit={true} />
                    </div>
                </form>
            </Modal>
        </div>
    )
}
