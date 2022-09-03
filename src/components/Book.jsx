import React, {  forwardRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef((props, ref) => {
  console.log(props);
  console.log("props");
    return (
        <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
                {props.children ? <h1 className="back-book">{props.children}</h1> : <img src={`https://cdn.pixabay.com/photo/2015/10/09/21/07/wedding-979931_960_720.jpg`} alt="" className="page-image" />}
            </div>
        </div>
    );
});

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <div className="page-text">{props.children}</div>
            </div>
        </div>
    );
});

function Book11 () {

    return (
      <div>
            <HTMLFlipBook
              width={250}
              height={333}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="demo-book"
            >
  
              <PageCover></PageCover>
              <Page  className="page" >
                <div className="page-content">
                  <img src={`https://media.istockphoto.com/vectors/peach-color-wild-roses-garden-party-invitation-vector-id1334458541?k=20&m=1334458541&s=612x612&w=0&h=5TORMLqvX_3YehWQy_icn-AM1pfazHWUSVqjE3UdtHI=`} alt="" className="page-image" />
                </div>
              </Page>
              <Page  className="page" >
                <div className="page-content">
                  <img src={`https://media.istockphoto.com/vectors/peach-color-wild-roses-garden-party-invitation-vector-id1334458541?k=20&m=1334458541&s=612x612&w=0&h=5TORMLqvX_3YehWQy_icn-AM1pfazHWUSVqjE3UdtHI=`} alt="" className="page-image" />
                </div>
              </Page>
              <PageCover>THE END</PageCover>
  
            </HTMLFlipBook>
          </div>
    );
  };

export default Book11;