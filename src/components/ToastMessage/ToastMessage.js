import React, { useEffect } from "react";
import "./ToastMessageStyles.scss";
const ToastMessage = ({ show, type, textHeader, textBody }) => {
  

    useEffect(() => {

        if(textHeader && textBody) {
            const toast = document.querySelector('.si-toast')
            setTimeout(() => {
               toast.classList.add('hide');
               toast.classList.remove('show');
            }, 5000)
        }

    }, [textHeader, textBody])

    const closeToastMessage  = () => {
        const message = document.querySelector('.si-toast');
        message.classList.add('hide');
        message.classList.remove('show');
    }
    return (
    <div className={`si-toast ${show ? 'show' : 'hide'} `}>
      <div className={`si-toast__content ${type ? type : ''}`}>
        <div className="si-toast__content-details">
          <div className="si-toast__content-details-icon">
            {type === 'success' ? <i className='bx bx-check' ></i> : type === 'error' ? <i className='bx bx-x' ></i> : <i className='bx bx-question-mark' ></i> }
          </div>
          <div className="si-toast__content-details-text">
            <p>
              {textHeader}
              <span>
                {textBody}
              </span>
            </p>
          </div>
        </div>
        <span className="si-toast__content-close" onClick={closeToastMessage}>
          <i className="bx bx-x" />
        </span>
      </div>
    </div>
  );
};

export default ToastMessage;
