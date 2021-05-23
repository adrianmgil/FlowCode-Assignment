import React from "react";
import './popup.css';

const Popup = ({isVisible, title, content, onCloseModal}) => {
  return  (isVisible ? <div className='containerPopup' onClick={ () => { onCloseModal(); }}><div className='title'>{title}</div>{content}</div> : null);
}

export default Popup;