import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./Signature.css";
import Card from './Card'


const Signature = () => {
    const [imageURL, setImageURL] = useState(null);

    const sigCanvas = useRef({});


    const clear = () => sigCanvas.current.clear();
    const save = () =>
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

    return (
        <div >
            <h1>Signature</h1>
            <p>Before making the decision regarding enrollment in this research you should have</p>
            <Popup
                modal
                trigger={<button>SIGN CONCENT FORM</button>}
                closeOnDocumentClick={false}
            >

                {close => (
                    <>
                        <SignaturePad
                            ref={sigCanvas}
                            canvasProps={{
                                className: "signatureCanvas"
                            }}
                        />

                        <button onClick={save}>Save</button>
                        <button onClick={clear}>Clear</button>
                        <button onClick={close}>Close</button>
                    </>
                )}

            </Popup>

            <Card imageURL={imageURL} />

        </div>
    );
}

export default Signature;