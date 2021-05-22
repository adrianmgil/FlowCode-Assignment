import React, { useEffect, useState } from 'react';
import './App.css';
import flowcodeLogo from './images/flowcode.jpg';
import linkedinLogo from './images/linkedin.png';
import nytimesLogo from './images/nytimes.jpg';
import huelLogo from './images/huel.png';
import shareIcon from './images/share.png';
import $ from 'jquery'
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

const App: React.FC = () => {

const [influencers, setInfluencers] = useState<any[]>([]);

useEffect(() => {
  const urlInfluencers = 'https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json';
  const getInfluencers = async() => {
    const response = await fetch(urlInfluencers);
    const results = await response.json();
    setInfluencers(results.pages);
  };

  getInfluencers();
  
  $('.draggableContainer').sortable();
},[])

const getLinkImageUrl = (link) => {
  if (link.provider === 'link') {
    var matches = link.actionData.link.match('https?://([A-Za-z_0-9.-]+).*');
    if (matches){
      const s = matches[1].split('.');
      const domain = s.slice(-2,-1)[0];
      return getImageLogoUrl(domain);
    }
    return '';
  }
  return getImageLogoUrl(link.provider);
}

const getImageLogoUrl = (title: string) => {
  switch (title) {
    case 'linkedin': return linkedinLogo;
    case 'flowcode': return flowcodeLogo;
    case 'nytimes': return nytimesLogo;
    case 'huel': return huelLogo;
    default: return '';
  }
}

const buildInfluencers = () => {
  return influencers.map(i => {
    const page = i.pages[0];

    return (
      <div className="profile" style={{backgroundColor: page.theme.backgroundColor}} key={i.id}>
        <img className={page.theme.profileImageShapeType} src={page.profileImage} alt='' onClick={() => { window.open(page.shortUrl); }}/>
        <div>{page.displayName}</div>
        {page.share === true ? <img src={shareIcon} className="shareIcon" onClick={() => { shareFlowcode(page.shortUrl);} } /> : null}
        <div className="caption">{page.caption}</div>
        {buildLinks(page.links)}
        </div>)
  })
}
const shareFlowcode = (url) => {
  const textarea = document.createElement('textarea');
  textarea.value = url;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

const buildLinks = (links) => {
  return links.map(l => {
    return (
      <div className="link" onClick={() => { window.open(l.actionData.link); }}>
        <div><img src={getLinkImageUrl(l)} alt=''></img></div>
        <div className="title">{l.title}</div>
      </div>
    )
  });
}

return (
    <div className="App">
      <header className="App-header">
        <h3>See how influencers, brands and more are using Flowpage</h3>
        <div className="container draggableContainer">
          {buildInfluencers()}
        </div>
      </header>
    </div>
  );

}
export default App;