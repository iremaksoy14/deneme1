import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastr() {
  return (
    <div>
      <button onClick={() => toast("Wow so easy!")}>
        Notify!
      </button>
      <ToastContainer  position="top-right"  autoClose={1000}
 />
    </div>
  );
}

export default Toastr;
