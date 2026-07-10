import "./ConfirmDialog.css";

function ConfirmDialog({

    title,

    message,

    onConfirm,

    onCancel

}){

    return(

        <div className="dialog-overlay">

            <div className="dialog">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="dialog-buttons">

                    <button
                    className="confirm"
                    onClick={onConfirm}
                    >
                        Confirmar
                    </button>

                    <button
                    className="cancel"
                    onClick={onCancel}
                    >
                        Cancelar
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ConfirmDialog;