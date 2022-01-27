import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SwapForm from './index';

function AddPuzzleModal({ edit }) {
  const [showModal, setShowModal] = useState(false);
  

  const modalSetter = () => {
    setShowModal(false);
  }

  return (
    <>
      {/* <button className='add-puzzle-button puzzle-buttons' onClick={() => setShowModal(true)}><i className="far fa-plus-square"></i></button> */}
      <button className='swap-btn' onClick={() => setShowModal(true)}><i className="fas fa-sync-alt"></i></button>
      {showModal && (
        <Modal className="add-puzzle-modal" onClose={() => setShowModal(false)}>

          <SwapForm edit={ edit} modalSetter={modalSetter} />
        </Modal>
      )}
    </>
  );
}

export default AddPuzzleModal;
