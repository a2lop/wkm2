import React, { useState } from 'react'
import Icon from '../components/common/Icon'
import ButtonIcon from '../components/common/ButtonIcon'
import Container from '../components/container/Container'
import ModalEditStore from '../components/modals/modalEditStore/modalEditStore'
import DefaultText from '../components/texts/DefaultText'
import LinkWithIcon from '../components/texts/LinkWithIcon'
import Subtitle from '../components/texts/Subtitle'
import Title from '../components/texts/Title'

export default function AdminStoreInfo({ user }) {
    const [modalEditStoreIsOpened, setModalEditStoreIsOpened] = useState(false)

    return (
        <div>
            {user && (
                <Container>
                    <div className="flex">
                        <div className="w-32">
                            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
                        </div>
                        <div className="w-full">
                            <div className="flex">
                                <div className="w-full">
                                    <Title text={user.name} />
                                    <Subtitle text={user.address} />
                                </div>
                                <div className="ml-2">
                                    <div className="text-whatkom flex">
                                        <ButtonIcon
                                            icon="faPencilAlt"
                                            size="2x"
                                            onClick={() => {
                                                setModalEditStoreIsOpened(true)
                                            }}
                                        />
                                        <ButtonIcon
                                            className="ml-3"
                                            icon="faShareAlt"
                                            size="2x"
                                            onClick={() => {
                                                setModalEditStoreIsOpened(true)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <DefaultText>{user.description}</DefaultText>
                            <LinkWithIcon icon="faEnvelope" link="mailto:whatkom@abc.com">
                                {user.email}
                            </LinkWithIcon>
                            <LinkWithIcon icon="faFacebook" link="https://www.facebook.com/whatkom123">
                                {user.facebook}
                            </LinkWithIcon>
                            <LinkWithIcon icon="faInstagram" link="https://www.instagram.com/whatkom/">
                                {user.instagram}
                            </LinkWithIcon>
                        </div>
                    </div>
                </Container>
            )}
            {modalEditStoreIsOpened && (
                <ModalEditStore
                    user={user}
                    // isOpen={modalEditStoreIsOpened}
                    // closeModal={() => {
                    //     setModalEditStoreIsOpened(false)
                    // }}
                ></ModalEditStore>
            )}
        </div>
    )
}
