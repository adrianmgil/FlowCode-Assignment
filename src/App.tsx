import React, { useEffect, useState } from 'react';
import './App.css';
import { getUrl } from './image';
import shareIcon from './images/share.png';
import SharePopup from './SharePopup';
import $ from 'jquery'
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

const App: React.FC = () => {

const [influencers, setInfluencers] = useState<any[]>([]);
const [shareUrl, setShareUrl] = useState<any>();

useEffect(() => {
  const urlInfluencers = 'https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json';
  const getInfluencers = async() => {
    const response = await fetch(urlInfluencers);
    const results = await response.json();
    setInfluencers(results.pages);
  };

  getInfluencers();
  
  $('.containerFlowCode').sortable();
},[])

const getLinkImageUrl = (link : any) => {
  if (link.provider === 'link') {
    var matches = link.actionData.link.match('https?://([A-Za-z_0-9.-]+).*');
    if (matches){
      const s = matches[1].split('.');
      const domain = s.slice(-2,-1)[0];
      return getUrl(domain);
    }
    return '';
  }
  return getUrl(link.provider);
}

const buildInfluencers = () => {
  return influencers.map(i => {
    const page = i.pages[0];

    return (
      <div className="profile" style={{backgroundColor: page.theme.backgroundColor}} key={i.id}>
        <img className={page.theme.profileImageShapeType} src={page.profileImage} alt='' />
        <div>{page.displayName}</div>
        {page.share === true ? <img src={shareIcon} className="shareIcon" onClick={ () => { setShareUrl(page.shortUrl) } } /> : null}
        <div className="caption">{page.caption}</div>
        {buildLinks(page.links)}
      </div>)
  })
}

const buildLinks = (links : any) => {
  return links.map(l => {
    return (
      <div className="link" onClick={() => { window.open(l.actionData.link); }} key={l.id}>
        <div><img src={getLinkImageUrl(l)} alt=''></img></div>
        <div className="title">{l.title}</div>
      </div>
    )
  });
}

const handleCloseModal = () => {
  setShareUrl('');
};

return (
    <div className="App">
      <header className="App-header">
        <h3>See how influencers, brands and more are using Flowpage</h3>
        <SharePopup url={shareUrl} onCloseModal={handleCloseModal} />
        <div className="containerFlowCode">
          {buildInfluencers()}
        </div>
      </header>
    </div>
  );

}
export default App;