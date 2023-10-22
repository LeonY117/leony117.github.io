import React, { useState } from 'react';

import Image from 'next/image';
import Modal from '@/components/UI/Modal/Modal';

import classes from './ModalImage.module.css';

const ModalImage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const src = props.src;
  const alt = props.alt;
  const caption = props.caption;

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    console.log('close modal');
    setShowModal(false);
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={'0'}
        height={'0'}
        sizes={'100vw'}
        onClick={handleImageClick}
        className={classes.Image}
      />
      <div
        className={classes.Modal}
        style={{
          opacity: !showModal ? '0' : '1',
          visibility: !showModal ? 'hidden' : 'visible',
        }}
      >
        <Modal clicked={handleModalClose}>
          <div className={classes.ModalImageWrapper}>
            <div className={classes.ImageWrapper}>
              <Image
                priority={props.priority}
                src={src}
                alt={alt}
                width={'0'}
                height={'0'}
                sizes={'100vw'}
                className={classes.ModalImage}
              />
            </div>
            <p className={classes.caption}>{caption}</p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalImage;
