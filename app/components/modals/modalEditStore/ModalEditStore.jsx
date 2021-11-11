import React, { useEffect, useState } from 'react'
// import Modal from 'react-modal'
// import { useForm } from 'react-hook-form'
// import Input from '../../common/Input'
// import ModalSection from '../ModalSection'
// import TextArea from '../../common/TextArea'
// import Button from '../../common/Button'
// import ModalHeader from '../ModalHeader'
// import ImagePicker from '../../common/ImagePicker'
// import fire from '../../../../config/firebase'

export default function ModalEditStore({ isOpen, closeModal, user }) {
    // const { register, handleSubmit, watch, errors, getValues, setValue } = useForm()
    // const [isOpened, setIsOpened] = useState(true)

    // const name = watch('name')
    // const city = watch('city')
    // const phone = watch('phone')
    // const email = watch('email')
    // const description = watch('description')
    // const facebook = watch('facebook')
    // const instagram = watch('instagram')
    // const keywords = watch('keywords')

    // useEffect(() => {
    //     console.log('user', user)
    //     if (user) {
    //         setValue('name', user.name)
    //     }
    // }, [user])

    // useEffect(() => {
    //     console.log('==errors', errors)
    // }, [errors])

    // useEffect(() => {
    //     console.log('==getValues', getValues())
    // }, [getValues()])

    // const onSubmit = () => {
    //     const values = getValues()

    //     delete values.storeImage

    //     console.log('===user', user)

    //     fire.firestore()
    //         .collection('users')
    //         .doc(user.uid)
    //         .update(values)
    //         .then()
    //         .catch(err => {
    //             console.log('===ERROR', err)
    //         })
    // }

    return (
        <div>
            {/* <Modal
                isOpen={isOpened}
                onRequestClose={() => {
                    setIsOpened(false)
                }}
                style={{}}
                contentLabel="Example Modal"
                style={{ content: { padding: 0 } }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader label="Configuración de tu tienda" closeModal={closeModal} />

                    <ModalSection label={'Información principal'}>
                        <Input
                            label="Nombre de tu tienda"
                            register={register({ required: true })}
                            name="name"
                            error={errors.name}
                            value={name}
                        />
                        <div className="flex">
                            <Input
                                label="Ciudad"
                                className="mr-1"
                                register={register}
                                name="city"
                                value={city}
                                error={errors.city}
                            />
                            <Input
                                label="Teléfono"
                                className="ml-1"
                                tooltipText="A este teléfono te llegarán tus pedidos"
                                register={register({ required: true })}
                                name="phone"
                                error={errors.phone}
                                value={phone}
                            />
                        </div>
                        <Input
                            label="Correo eléctrónico"
                            isOptional={true}
                            register={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Correo electrónico incorrecto'
                                }
                            })}
                            name="email"
                            error={errors.email}
                            value={email}
                        />
                    </ModalSection>

                    <ModalSection label={'Descripción (opcional)'}>
                        <div className="flex">
                            <ImagePicker label="Logo" register={register} name="storeImage" />
                            <TextArea
                                name="description"
                                className="w-full ml-4"
                                label="Describe a tu tienda"
                                tooltipText="Indica cual es el giro de tu negocio, horarios de atención y demás información que consideres relevante "
                                value={description}
                            />
                        </div>
                    </ModalSection>

                    <ModalSection label={'Redes sociales (opcional)'}>
                        <div className="flex">
                            <Input
                                label="Facebook"
                                className="mr-1"
                                register={register}
                                name="facebook"
                                value={facebook}
                            />
                            <Input
                                label="Instagram"
                                className="ml-1"
                                register={register}
                                name="instagram"
                                value={instagram}
                            />
                        </div>
                    </ModalSection>
                    <ModalSection label={'Avanzado (opcional)'} hideDivider={true}>
                        <Input
                            label="Keywords"
                            name="keywords"
                            error={errors.keywords}
                            register={register}
                            value={keywords}
                        />
                    </ModalSection>

                    <hr className="my-2 border-gray-500 border-t-2" />

                    <div className="flex justify-end">
                        <Button type="secondary" text="Cancelar" className="mr-2" onClick={closeModal} />
                        <Button text="Guardar" isSubmit={true} />
                    </div>
                </form>
            </Modal> */}
        </div>
    )
}
