import React from "react";
import Popup from './Popup';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { getImageUrl } from './image';
import './SharePopup.css';

const SharePopup = ({url, onCloseModal}) => {

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
    
    return  <Popup 
            isVisible={url ? true:false}
            title='Share'
            content={
                      <div>
                        <div className='app'>
                          <FacebookShareButton url={url} quote={'test'} hashtag={'test'} onClick={onCloseModal} ><img src={getImageUrl('facebook')} alt=''/></FacebookShareButton>
                          <TwitterShareButton url={url} title={'Flowcode'} onClick={onCloseModal}><img src={getImageUrl('twitter')} alt=''/></TwitterShareButton>
                          <LinkedinShareButton url={url} title={'Flowcode'} onClick={onCloseModal} ><img src={getImageUrl('linkedin')} alt=''/></LinkedinShareButton>
                        </div>
                        <div><button onClick={() => {shareToClipboard(url); }}>To Clipboard</button></div>
                        <div><button onClick={() => {shareToNewWindow(url); }}>Open new window</button></div>
                        <div><button onClick={() => {onCloseModal();}}>Close</button></div>
                      </div>
                    }
            onCloseModal={onCloseModal}
          />;
}

export default SharePopup;