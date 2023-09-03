import React from "react";

const MapSection = (props) => {
  const bgImage = props.bgImage
    ? {
        backgroundImage: `url(${props.bgImage})`,
      }
    : {};
  return (
    <section className="maps-section">
      <div className="maps-section__content" style={bgImage}>
        <div className="maps__head-title">
          <h1 className="maps-name">{props.name}</h1>
          <p className="maps-coordinates">{props.coordinates}</p>
          <p className="maps-server">Hong Kong</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
