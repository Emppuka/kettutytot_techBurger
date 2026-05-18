import React, { type ReactNode } from 'react';

interface ModalProps { /*ModalProps sisällä ne tarvittavat jutut, import ModalProps*/ 
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    /* Backdrop: Tummentaa taustan kun modal avataan */
    <div 
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose} // sulkee modalin jos klikkaa sen vierestä
    >
      {/* Children-laatikko eli varsinainen modal */}
      <div 
        className="bg-white rounded-2xl max-h-[90vh] max-w-sm md:max-w-md lg:max-w-lg w-full relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // estää sulkemisen jos klikkaa modalin sisäpuolelta
      >
        {/* X-nappi */}
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Rendered Children elikkä modalin varsinainen sisältö */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;