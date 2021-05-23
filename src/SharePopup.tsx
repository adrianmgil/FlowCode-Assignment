import React from "react";
import Popup from './Popup';

const SharePopup = ({url, onCloseModal}) => {
  return  <Popup 
            isVisible={url ? true:false}
            title='Share'
            content={
                      <div>
                        <div><button onClick={() => {shareToClipboard(url); onCloseModal();}}>To Clipboard</button></div>
                        <div><button onClick={() => {window.open(url); onCloseModal();}}>Open new window</button></div>
                      </div>
                    }
            onCloseModal={onCloseModal}
          />;
}

const shareToClipboard = (url : string) => {
  const textarea = document.createElement('textarea');
  textarea.value = url;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);  
}    

export default SharePopup;