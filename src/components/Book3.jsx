import React, {  useState } from "react";
// import HTMLFlipBook from "react-pageflip";



const Book3 = () => {

const [rotate, setRotate]= useState(false)
 
const toggleRotate = ()=>{
  setRotate(!rotate)
}

  return (
    <div className="page1">
      <div onClick={toggleRotate} className={`wrapper ${rotate ? "rotate" : ""}`}>
        <div className="front">
          <img src={`https://cdn.pixabay.com/photo/2015/10/09/21/07/wedding-979931_960_720.jpg`} alt="" className="page-image" />
        </div>
        <div className="back">
          <img src="https://media.istockphoto.com/vectors/peach-color-wild-roses-garden-party-invitation-vector-id1334458541?k=20&m=1334458541&s=612x612&w=0&h=5TORMLqvX_3YehWQy_icn-AM1pfazHWUSVqjE3UdtHI=" alt="" />
        </div>
      </div>
     </div>
  );
};

export default Book3;