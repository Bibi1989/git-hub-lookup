import React from "react";

export const Spinner = () => (
  // <img src={spinner} alt="spinner" style={style} />
  // <div style={style}>
  //     <iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">via GIPHY</a></p>
  // </div>

  <div style={style} className='fa-5x'>
    <i className='fa fa-spinner fa-pulse'></i>
  </div>
);

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  fontSize: '15rem',
  color: 'orangered',
  transform: `translate(-50%, -50%)`
};
