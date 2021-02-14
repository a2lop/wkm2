import React from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import ModalSection from '../ModalSection'
import TextArea from '../../common/TextArea'
import Button from '../../common/Button'

export default function ModalEditStore({ isOpen, closeModal }) {
    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = () => {}

    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={{}}
                contentLabel="Example Modal"
            >
                <form>
                    <p className="text-2xl">Editar tu tienda</p>
                    <hr className="my-2 border-gray-500 border-t-2" />

                    <ModalSection label={'Información principal'}>
                        <Input label="Nombre de tu tienda" />
                        <div className="flex">
                            <Input label="Ciudad" className="mr-1" />
                            <Input
                                label="Teléfono"
                                className="ml-1"
                                tooltipText="A este teléfono te llegarán tus pedidos"
                            />
                        </div>
                        <Input label="Correo eléctrónico" isOptional={true} />
                    </ModalSection>

                    <hr className="my-2 border-gray-500 border-t-2" />

                    <ModalSection label={'Descripción (opcional)'}>
                        <TextArea
                            label="Describe a tu tienda"
                            tooltipText="Indica cual es el giro de tu negocio, horarios de atención y demás información que consideres relevante "
                        />
                    </ModalSection>

                    <hr className="my-2 border-gray-500 border-t-2" />

                    <ModalSection label={'Redes sociales (opcional)'}>
                        <div className="flex">
                            <Input label="Facebook" className="mr-1" />
                            <Input label="Instagram" className="ml-1" />
                        </div>
                    </ModalSection>

                    <hr className="my-2 border-gray-500 border-t-2" />

                    <div className="flex justify-end">
                        <Button type="secondary" text="Cancelar" className="mr-2" onClick={closeModal} />
                        <Button text="Guardar" />
                    </div>
                </form>
            </Modal>
        </div>
    )
}
