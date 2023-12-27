

const DashBoardEditPeople = () => {
    return (
        <div>
            <dialog id="modal_edit_people" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">edit people</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DashBoardEditPeople;