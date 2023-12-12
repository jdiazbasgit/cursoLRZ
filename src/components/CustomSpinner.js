import React from 'react';
import loaderbar from '../loaderbar.gif';

const CustomSpinner = (props) => {

  const { device } = props.device;

  if (device === "desktop"){
    return (
      <div className="custom-spinner">
        <img  src={loaderbar} alt="Spinner personalizado" />
      </div>
    );
  }else{
    return (
      <div className="custom-spinner">
        <img style={{ maxWidth: "250px" }} src={loaderbar} alt="Spinner personalizado" />
      </div>
    );
  }
};

export default CustomSpinner;