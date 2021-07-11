import React, { useState, useEffect, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import firebase from '../../config/firebase'
import moment from 'moment'
import { useAuth } from '../../lib/auth'

import Container from 'Components/container/Container'
import InputRof from 'Components/common/InputRof'
import Button from 'Components/common/Button'

function Login({ firebaseUser }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    const [isLoading, setIsLoading] = useState(true)
    const [step, setStep] = useState(1)
    const [loggedUser, setLoggedUser] = useState()

    const { auth, loading, signOut } = useAuth()

    // const value = useContext(AuthContext)

    // useEffect(() => {
    //     console.log(' firebaseUser', firebaseUser)
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('submitButton', {
    //         size: 'invisible',
    //         callback: () => {
    //             // onSignInSubmit()
    //         }
    //     })

    //     setValue('phone', '+593984999880')
    // }, [])

    // useEffect(() => {
    //     console.log('=== auth', auth)
    // }, [auth, loading])

    const onSubmit = data => {
        // console.log('SUBMIT', getValues())
        const appVerifier = window.recaptchaVerifier

        // const values = getValues()
        const { phone, code, name } = data
        console.log('phone', data)

        setIsLoading(!isLoading)
        const db = firebase.firestore()

        // if (step === 1) {
        //     firebase
        //         .auth()
        //         .signInWithPhoneNumber(phone, appVerifier)
        //         .then(confirmationResult => {
        //             setStep(2)
        //             window.confirmationResult = confirmationResult
        //         })
        //         .catch(error => {
        //             console.log('===error', error)
        //         })
        //         .finally(() => {
        //             setIsLoading(false)
        //         })
        // } else if (step === 2) {
        //     confirmationResult
        //         .confirm(code)
        //         .then(({ user }) => {
        //             if (user) {
        //                 setLoggedUser(user)
        //                 console.log('=== existent user', user)

        //                 db.collection('users')
        //                     .doc(user.uid)
        //                     .get()
        //                     .then(response => {
        //                         const userData = response.data()

        //                         if (userData) {
        //                             //logged
        //                         } else {
        //                             setStep(3)
        //                         }
        //                     })
        //                     .finally(() => {
        //                         setIsLoading(false)
        //                     })
        //             } else {
        //                 setIsLoading(false)
        //             }
        //         })
        //         .catch(error => {
        //             console.log('===error', error)
        //             setError('code', { message: error.message, shouldFocus: true })
        //             // User couldn't sign in (bad verification code?)
        //             // ...
        //             setIsLoading(false)
        //         })
        // } else if (step === 3) {
        //     db.collection('users')
        //         .doc(loggedUser.uid)
        //         .set({
        //             id: loggedUser.uid,
        //             phone,
        //             creation: new Date().getTime(),
        //             membership: '2',
        //             membershipUntil: new Date(moment(Date.now()).add(7, 'days')).getTime(),
        //             name
        //         })
        //         .then(async () => {
        //             console.log('===user created')
        //         })
        //         .catch(error => {
        //             console.log('ERROR', error)
        //         })
        // }
    }

    const onLogout = () => {
        signOut()
    }

    return (
        <div className={'p-3 w-full bg-gray-200'}>
            <form>
                <Container>
                    <p>Inicia sesión</p>
                    <InputRof
                        required={true}
                        label={'Teléfono'}
                        register={register}
                        name="phone"
                        error={errors.phone}
                    />

                    {step >= 2 && (
                        <InputRof label={'Codigo de seguridad'} register={register} name="code" error={errors.code} />
                    )}
                    {step === 3 && (
                        <InputRof label={'Nombre de tu tienda'} register={register} name="name" error={errors.name} />
                    )}
                    {/* <input type="submit" /> */}
                    <Button
                        id="submitButton"
                        isSubmit={true}
                        text="Iniciar"
                        isLoading={isLoading}
                        onClick={handleSubmit(onSubmit)}
                    />
                    {/* <Button id="submitButton" text="Logout" isLoading={isLoading} onClick={onLogout} /> */}
                </Container>
            </form>
        </div>
    )
}

Login.getInitialProps = async ctx => {
    return { firebaseUser: null }
}

export default Login
