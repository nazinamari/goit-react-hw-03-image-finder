import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, Exit } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === "Escape") {
        this.props.onClose();
        }
    };

    handleBackdrop = (e) => {
        if (e.currentTarget === e.target) {
        this.props.onClose();
        }
    };

    render() {
        const { src, tags, onClose } = this.props;
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalStyled>
                    <Exit onClick={onClose}/>
                    <img src={src} alt={tags} />
                </ModalStyled>
            </Overlay>,
            modalRoot
        );
    }
}