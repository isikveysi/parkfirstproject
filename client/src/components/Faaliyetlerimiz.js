import React from 'react'
import faaliyetlist from "../contetns/faaliyetlerimiz.json"

export default function Faaliyetlerimiz() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <hr className="tall" />
                </div>
            </div>


            <div className="row">

                <div className="col-md-12">
                    <h3 className="heading-primary mt-xl"> <strong>PARK HUKUK</strong> Faaliyet Alanlarımız</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="history">
                        {
                            faaliyetlist.map((contetn, index) => (
                                <li key={index} className="appear-animation" data-appear-animation="fadeInUp">
                                    <div className="thumb">
                                        <img src={contetn.img} />
                                    </div>
                                    <div className="featured-box">
                                        <div className="box-content">
                                            <h4 className="heading-primary"><strong>{contetn.title}</strong></h4><br></br>
                                            <p> {contetn.text}</p>
                                        </div>
                                    </div>
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>
        </div>


    )
}
