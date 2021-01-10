import React, { Component } from 'react'
import axios from "axios"


export default class Iletisim extends Component {

    state = {
        name: "",
        email: "",
        konu: "",
        message: ""
    }
    componentDidMount() {
        function loadScript(src) {
            return new Promise(function(resolve, reject){
              var script = document.createElement('script');
              script.src = src;
              script.addEventListener('load', function () {
                resolve();
              });
              script.addEventListener('error', function (e) {
                reject(e);
              });
              document.body.appendChild(script);
              document.body.removeChild(script);
            })
          };
          loadScript("/js/theme.js")
          loadScript("/js/theme.init.js")
          loadScript("/js/views/view.contact.js")
          loadScript("/vendor/rs-plugin/js/jquery.themepunch.tools.min.js")   
          loadScript("/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js") 
      
    }

    onHandler = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    };
    onSubmit = async (e) => {
        e.preventDefault();
        axios.post("/iletisim", this.state)
            .then((res) => {
                this.setState({
                    name: "",
                    email: "",
                    konu: "",
                    message: ""
                })

            })
            .catch((error) => {
           console.log("mail gönderme ksımı",error)
            })
    
    }
    render() {
        return (
            <>
               <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Iletişim Bilgilerimiz</h1>
                        </div>
                    </div>
                </div>
            </section>
                <div className="container">
                    <div>
                        <div className="col-md-6">
                            <div className="alert alert-success hidden mt-lg" id="contactSuccess">
                                <strong>Success!</strong> Your message has been sent to us.
                           </div>
                            <div className="alert alert-danger hidden mt-lg" id="contactError">
                                <strong>Error!</strong> There was an error sending your message.
                           <span className="font-size-xs mt-sm display-block" id="mailErrorMessage" />
                            </div>
                            <h2 className="mb-sm mt-sm"><strong></strong> </h2>
                            <h4 className="mb-sm mt-sm"><a><strong>ILETISIM FORMU</strong></a> </h4>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="form-group">
                                        <div className="col-md-6">
                                            <label>Isiminiz *</label>
                                            <input type="text" data-msg-required="Lütfen isminizi giriniz" maxLength={100} className="form-control"
                                                name="name" value={this.state.name} onChange={this.onHandler}
                                                id="name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Email addresiniz *</label>
                                            <input type="email" data-msg-required="Lütfen email adresinizi giriniz" data-msg-email="Lütfen geçerli bir email adresi giriniz"
                                                maxLength={100} className="form-control"
                                                name="email" value={this.state.email} onChange={this.onHandler} id="email" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <label>Konu Başlığı</label>
                                            <input type="text" data-msg-required="Lütfen konu başlığınızı giriniz" maxLength={100} className="form-control"
                                                name="konu" value={this.state.konu} onChange={this.onHandler} id="subject" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <label>Mesajınız *</label>
                                            <textarea maxLength={5000} data-msg-required="Lütfen mesajınzı yazınız" rows={10} className="form-control"
                                                name="message" value={this.state.message} onChange={this.onHandler} id="message" required={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" onClick={this.onSubmit}
                                            className="btn btn-primary btn-lg mb-xlg" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                        <h4 className="heading-primary">PARK HUKUK <strong>&amp;</strong> DANISMANLIK</h4>
                            
                            <p >Alanında deneyimli Hukukçulardan ve destek personellerinden oluşan, kalabalık bir ekiple çalışmaktayız.
                Uzman ekibimizle; müvekkillerimize, dinamik çalışma koşullarına uyum sağlamalarında, çalışma ortamını mevzuata uygun bir şekilde düzenlemelerinde ve olası denetimlere hazırlanmalarında yol gösteriyoruz.</p>
                            <hr />
                            <h4 className="heading-primary mt-lg"> ILETISIM BILGILERIMIZ </h4>
                            <ul className="list list-icons list-icons-style-3 mt-xlg">
                                <li><i className="fa fa-map-marker" /> <strong>Adres:</strong>  Kartaltepe Mahallesi Lavanta Çiçeği Sokak No:3 D: 1  34145 Bakırköy/İstanbul</li>
                                <li><i className="fa fa-phone" /> <strong>Telefon:</strong>(0505) 292 60 25</li>
                                <li><i className="fa fa-phone" /> <strong>Telefon:</strong>(0532) 596 48 21</li>
                                <li><i className="fa fa-envelope" /> <strong>Email:</strong> <a href="mailto:mail@example.com">av.mehmettunc@hotmail.com</a></li>
                            </ul>
                            <hr />
                            <h4 className="heading-primary">Çalışma <strong>Saatlerimiz</strong></h4>
                            <ul className="list list-icons list-dark mt-xlg">
                                <li><i className="fa fa-clock-o" /> Pazartesi - Cuma <strong>09:00 - 18:00</strong>  </li>
                                <li><i className="fa fa-clock-o" /> Cumartesi   <strong>10:00 - 13:00</strong></li>                                
                            </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
