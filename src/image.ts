import flowcodeLogo from './images/flowcode.jpg';
import linkedinLogo from './images/linkedin.png';
import nytimesLogo from './images/nytimes.jpg';
import huelLogo from './images/huel.png';

export function getUrl(title : string) {
    switch (title) {
        case 'linkedin': return linkedinLogo;
        case 'flowcode': return flowcodeLogo;
        case 'nytimes': return nytimesLogo;
        case 'huel': return huelLogo;
        default: return '';
      }
}