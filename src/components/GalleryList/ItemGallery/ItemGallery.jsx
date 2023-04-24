import React, { Component } from 'react';
import { StyledItem, StyledImage } from './ItemGallery.styled';
import { Modal } from '../../Modal/Modal';

export class ItemGallery extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }));
    };

    // onImgClick = (largeImgURL) => {
    //     this.setState({ largeImgSrc: largeImgURL })
    // };

    render() {
        const { picture } = this.props;
        const { showModal } = this.state;
        
        return (
            <StyledItem key={picture.id}>
                <StyledImage
                    src={picture.webformatURL}
                    alt={picture.tags}
                    onClick={this.toggleModal}
                />
                {showModal && (
                    <Modal
                        onClose={this.toggleModal}
                        src={picture.largeImageURL}
                        alt={picture.tags}
                    />
                )}
            </StyledItem>
        )
    }
};