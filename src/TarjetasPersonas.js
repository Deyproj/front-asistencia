import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const TarjetasPersonas = ({ totalPersonas }) => {
  return (
    <>
      <div className="card mx-5 my-5 mx-lg-0 my-lg-3 text-center bg-primary text-white sticky-top">
        <div className="card-body">
          <h4>Total Personas</h4>
          <h4>
            <FontAwesomeIcon icon={faUsers}/>{" "} {totalPersonas}
          </h4>
        </div>
      </div>
    </>
  );
};

export default TarjetasPersonas;
