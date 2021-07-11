import React, { useState, useEffect } from 'react'
import ModalAddCategory from '../../app/components/modals/modalAddCategory/ModalAddCategory'
import ModalProduct from '../../app/components/modals/modalProduct/modalProduct'
import Title from 'Components/texts/Title'
import MenuOption from '../../app/components/texts/MenuOption'
import AdminStoreInfo from '../../app/content/AdminStoreInfo'
import AdminProducts from '../../app/content/AdminProducts'
import firebase from '@/config/firebase'

import { useAuth } from '../../lib/auth'

function Admin() {
    const [activeTab, setActiveTab] = useState(1)

    const [modalAddCategoryIsOpened, setModalAddCategoryIsOpened] = useState(false)
    const [modalProductIsOpened, setModalProductIsOpened] = useState(false)
    const [user, setUser] = useState()
    const [userDetails, setUserDetails] = useState()

    const { auth, loading, signOut } = useAuth()

    useEffect(() => {
        if (auth) {
            setUser(auth)
        }
    }, [auth])

    useEffect(() => {
        if (user) {
            firebase
                .firestore()
                .collection('users')
                .doc(user.uid)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        const response = doc.data()
                        setUserDetails({ ...user, ...response })
                    }
                })
                .catch(err => {
                    console.log('===', err)
                })
        }
    }, [user])

    useEffect(() => {
        if (userDetails) {
            console.log('===userDetails', userDetails)
        }
    }, [userDetails])

    return (
        <div className="flex h-screen">
            <div className="w-96 bg-whatkom pt-4">
                <Title text="Panel de administración" className="text-center" isWhite={true} />
                <hr className="my-2 border-white border-t-4" />
                <div>
                    <MenuOption
                        isActive={activeTab === 1}
                        leftIcon="faStore"
                        onClick={() => {
                            setActiveTab(1)
                        }}
                    >
                        Tu tienda
                    </MenuOption>
                    <MenuOption
                        isActive={activeTab === 2}
                        leftIcon="faListAlt"
                        onClick={() => {
                            setActiveTab(2)
                        }}
                    >
                        Categorías
                    </MenuOption>
                    <MenuOption
                        isActive={activeTab === 3}
                        leftIcon="faBox"
                        onClick={() => {
                            setActiveTab(3)
                        }}
                    >
                        Productos
                    </MenuOption>
                </div>
            </div>
            <div className={'p-3 w-full bg-gray-200'}>
                {activeTab === 1 && <AdminStoreInfo user={userDetails} />}
                {activeTab === 3 && <AdminProducts />}
            </div>

            <ModalAddCategory
                isOpen={modalAddCategoryIsOpened}
                closeModal={() => {
                    setModalAddCategoryIsOpened(false)
                }}
            ></ModalAddCategory>
            <ModalProduct
                isOpen={modalProductIsOpened}
                closeModal={() => {
                    setModalProductIsOpened(false)
                }}
            ></ModalProduct>
        </div>
    )
}

Admin.getInitialProps = async ctx => {
    return { firebaseUser: null }
}

export default Admin
