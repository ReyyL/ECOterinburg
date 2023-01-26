import React, {useState} from 'react';
import "./ScrollButton.css"
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
    else if (scrolled <= 400){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className="btn-up btn-up_hide" onClick={() => scrollToTop()} style={{display: visible ? '' : 'none'}}></div>
  );
}
  
export default ScrollButton;