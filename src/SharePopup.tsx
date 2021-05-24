import React from "react";
import Popup from './Popup';
import { getImageUrl } from './image';
import './SharePopup.css';

const SharePopup = ({url, onCloseModal}) => {

    const apps = ['facebook', 'twitter', 'instagram'];

    const shareToClipboard = (url: string) => {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);  
      onCloseModal();
    }    
  
    const shareToNewWindow = (url: string) => {
      window.open(url);
      onCloseModal();
    }
    
    const shareToApp = (url: string) => {
      //setTimeout(() => { window.location.href = url;}, 25);
      //window.location.href = 'fb://';
      alert('This function is currently not available.')
    }

    return  <Popup 
            isVisible={url ? true:false}
            title='Share'
            content={
                      <div>
                        <div><button onClick={() => {shareToClipboard(url); }}>To Clipboard</button></div>
                        <div><button onClick={() => {shareToNewWindow(url); }}>Open new window</button></div>
                        <div>
                            {apps.map(a => { return <img src={getImageUrl(a)} onClick={() => {shareToApp(url); }} alt='' /> })}
                        </div>
                        <div><button onClick={() => {onCloseModal();}}>Close</button></div>
                      </div>
                    }
            onCloseModal={onCloseModal}
          />;
}

export default SharePopup;