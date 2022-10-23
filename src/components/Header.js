import React from 'react';

const Header = ({ titulo }) => {
    return (
        <>
            <div id="main-header" className="cabecero ">
                <div className="container  text-lg-left">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <h1 className="restitle mt-1">
                                <text>
                                    <img src='/images/cubo-3d.png' width="45" height="45" ></img>
                                    {" "}{titulo}</text>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Header;