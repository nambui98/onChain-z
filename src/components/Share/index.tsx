import { useState } from 'preact/hooks';
import React from 'react'
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import { ButtonOutlinePrimary, CopyButton } from '../Button';
import Modal from '../Modal';
type Props = { href: string }

export default function Share({ href }: Props) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="ml-auto sm-max:ml-0">
                <ButtonOutlinePrimary className="group w-162px h-38px sm-max:mt-6" onClick={() => { setOpenModal(true) }}>
                    <img src="/assets/icons/export.svg" className="mr-2 transition duration-300 ease-out filter group-hover:brightness-0 group-hover:invert" alt="" />
                    Chia sẻ bài viết
                </ButtonOutlinePrimary>
            </div>
            <Modal show={openModal} setShow={() => { setOpenModal((prev) => !prev) }} >
                <div class="grid grid-cols-4 gap-4">
                    <FacebookShareButton url={href} quote={""} >  <FacebookIcon /></FacebookShareButton>
                    <TelegramShareButton url={href} quote={""}>
                        <TelegramIcon />
                    </TelegramShareButton>
                    <TwitterShareButton url={href} quote={""}>
                        <TwitterIcon />
                    </TwitterShareButton>
                    <CopyButton href={href} />
                </div>
            </Modal>
        </>
    )
}