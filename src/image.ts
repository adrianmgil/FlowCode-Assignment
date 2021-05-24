import flowcodeLogo from './images/flowcode.jpg';
import linkedinLogo from './images/linkedin.png';
import nytimesLogo from './images/nytimes.jpg';
import huelLogo from './images/huel.png';
import facebookMessengerLogo from './images/fb_msgr.png';
import facebookLogo from './images/fb.png';
import twitterLogo from './images/twitter.png';
import instagramLogo from './images/instagram.png';

export function getImageUrl(title : string) {
    switch (title) {
        case 'linkedin': return linkedinLogo;
        case 'flowcode': return flowcodeLogo;
        case 'nytimes': return nytimesLogo;
        case 'huel': return huelLogo;
        case 'facebookmessenger': return facebookMessengerLogo;
        case 'facebook': return facebookLogo;
        case 'twitter': return twitterLogo;
        case 'instagram': return instagramLogo;
        default: return '';
      }
}