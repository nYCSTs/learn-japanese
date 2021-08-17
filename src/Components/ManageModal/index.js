import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ManageModal = ({ confirmationText, modalState, setModalState, deleteFunction }) => {
    const handleClose = () => setModalState(false);

    return (
        <Modal show={modalState} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Remover</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Confirmar remocao do {confirmationText} ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={deleteFunction}>
                    Deletar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ManageModal;