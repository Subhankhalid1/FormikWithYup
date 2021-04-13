import React, { useContext, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import DescriptionButtons from "./DescriptionButtons"
import { GlobalContext } from "../ContextAPI/Context";


function CenteredModal(props) {
    const [email, setEmail] = useState("");
    const { handleNext } = useContext(GlobalContext);

    // const submitData = (event) => {
    //     event.preventDefault();
    //     alert();
    //     if (email !== "") handleNext();
    // }

    return <>
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
                <section className="d-flex justify-content-end align-items-center">
                    <div onClick={() => props.onHide()} className="cross-span d-flex justify-content-center align-items-center">x</div>
                </section>
                <div className="py-4 px-4" style={{ textAlign: "center" }}>
                    <h4 className="font-bold">Save and Exit</h4>
                    <p style={{ fontSize: "samller" }}>
                        Please enter your email to continue your informed consent later
                        or on another device
                    </p>
                    <input onchange={(e) => setEmail(e.target.value)} type="email" className="form-control w-75 mx-auto mb-4" required placeholder="Your Email" />
                    <Button onClick={handleNext} className="w-25 mb-5" style={{ borderRadius: "10px" }}>Submit</Button>
                </div>
            </div>
        </Modal>
    </>
}

function SaveDescriptionBox() {
    const [modalShow, setModalShow] = React.useState(false);

    const openModal = () => setModalShow(true);
    const closeModal = () => setModalShow(false);

    return <>
        <CenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <DescriptionButtons openModal={openModal} />
    </>
}

export default SaveDescriptionBox;