import { useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group'
import { useClickOutside } from "../customHooks";
import { Mode } from "../data";

export default function Modal(
    { modalOpen, closeModal, currentMode: { rules, rulesAlt } }:
        { modalOpen: boolean, closeModal: any, currentMode: Mode }) {

    const modalRef: any = useRef(null), modalDivRef = useRef(null);

    useClickOutside(modalDivRef, closeModal)

    useEffect(() => {
        if (modalOpen) {
            modalRef.current?.showModal();
        } else {
            setTimeout(() => {
                modalRef.current?.close();
            }, 500)
        }
    }, [modalOpen]);

    return (
        <CSSTransition in={modalOpen} timeout={500} nodeRef={modalRef}
            classNames='rulesModal_modalAnimate' >
            <dialog ref={modalRef} onCancel={closeModal} >
                <div ref={modalDivRef} className="rulesModal">
                    <h2 className="rulesModal_header font-700">rules</h2>
                    <button className="rulesModal_close" aria-label="close modal"
                        onClick={closeModal}></button>
                    <img className="rulesModal_img" src={rules} alt={rulesAlt} />
                </div>
            </dialog>
        </CSSTransition>
    )
}
