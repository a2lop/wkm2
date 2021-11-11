import React, { useState, useEffect } from 'react'
import styles from './admin.module.css'
// import ModalAddCategory from '../../app/components/modals/modalAddCategory/ModalAddCategory'
// import ModalProduct from '../../app/components/modals/modalProduct/modalProduct'

// import firebase from '@/config/firebase'

// import { MenuOption, Title } from '@components'
// import { AdminProducts, AdminStoreInfo } from '@content'

import { useAuth, firebase } from '@utils'
import Sidebar from 'app/modules/admin/Sidebar'
import AdminStoreInfo from 'app/modules/admin/AdminStoreInfo'
import AdminCategories from 'app/modules/admin/AdminCategories'
import AdminProducts from 'app/modules/admin/AdminProducts'
// import { AdminProducts } from '@content'
import AdminStats from 'app/modules/admin/AdminStats'

function Admin() {

  const [user, setUser] = useState()
  const [userDetails, setUserDetails] = useState()

  const [selectedTab, setSelectedTab] = useState(0)

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
    <div className="flex h-screen p-4">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 0 && <AdminStoreInfo />}
      {selectedTab === 1 && <AdminCategories />}
      {selectedTab === 2 && <AdminProducts />}
      {selectedTab === 3 && <AdminStats />}
      {/* <div className="bg-white w-full p-3 rounded-lg">
        <h2 className={styles.title}>Categorias</h2>
      </div> */}
      {/* <div className="w-96 bg-venderelo pt-4">
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
            </div> */}
      {/* <div className={'p-3 w-full bg-gray-200'}>
                {activeTab === 1 && <AdminStoreInfo user={userDetails} />}
                {activeTab === 3 && <AdminProducts />}
            </div>

            {/* <ModalAddCategory
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
            ></ModalProduct> */}
    </div>
  )
}

Admin.getInitialProps = async ctx => {
  return { firebaseUser: null }
}

export default Admin
