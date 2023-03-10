import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-6 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Contactanos</h5>
            <p> 3057708772</p>
          </div>
        </div>
        <div className="col-12 col-md-6 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5> Colombia</h5>
            <p> Envios Nacionales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
