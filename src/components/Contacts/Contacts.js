import style from './Contacts.module.css';

const Contacts = () => {
    return (
<iframe
className={style["contacts-map-wrapper"]}
width="520" 
height="400" 
frameBorder="0" 
scrolling="no" 
marginHeight="0" marginWidth="0" 
id="gmap_canvas" 
src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=bul.%20Iskarsko%20Shose%207%20Sofia+(Sport%20Center%20Europe)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> )
}

export default Contacts;