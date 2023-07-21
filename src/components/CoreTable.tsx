import { useState } from "react";
import { NewUserForm } from "./user-management/NewUserForm";

export const CoreTable = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <>
      <div>
        <button
          onClick={openModal}
          className="bg-cyan-500 text-white rounded-md px-4 py-2"
        >
          Add user
        </button>
      </div>
      {showModal && <NewUserForm onClose={closeModal} />}
    </>
  );
};
