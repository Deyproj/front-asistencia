import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const TarjetasPersonas = ({ totalPersonas, titulo, background}) => {
  return (
    <>
      <div className="card mx-5 my-5 mx-lg-0 my-lg-3 text-center text-white sticky-top" >
        <div className={background}>
        <div className="card-body ">
          <h4>{titulo}</h4>
          <h4>
            <FontAwesomeIcon icon={faUsers}/>{" "} {totalPersonas}
          </h4>
        </div>
        </div>
    </div>
    </>
  );
};

export default TarjetasPersonas;