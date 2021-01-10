import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-ribbon">
                        <span>Bize Ulaşın</span>
                    </div>
                    <div className="col-md-3">
                        <div className="newsletter">
                            <h4>KURUMSAL</h4>
                            <p>Alanında deneyimli Hukukçulardan ve destek personellerinden oluşan, kalabalık bir ekiple çalışmaktayız.
                            Uzman ekibimizle; müvekkillerimize, dinamik çalışma koşullarına uyum sağlamalarında, çalışma ortamını mevzuata
                            uygun bir şekilde düzenlemelerinde ve olası denetimlere hazırlanmalarında yol gösteriyoruz.
                            </p>
                            <div className="alert alert-success hidden" id="newsletterSuccess">
                                <strong>Success!</strong> You've been added to our email list.
                           </div>
                            <div className="alert alert-danger hidden" id="newsletterError" />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4>Park Hukuk</h4>
                        <div className="row">
                            <img src="img/parkimg/parkHukuk.jpg"
                                style={{ height: "150px", width: "100%" }} />
                        </div>

                        <div id="tweet" className="twitter" data-plugin-tweets data-plugin-options="{'username': '', 'count': 2}">
                            <p>Bizimle istediğiniz zaman iletişime geçebilirsiniz</p>


                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-details">
                            <h4>Iletişim Bilgilerimiz</h4>
                            <ul className="contact">
                                <li>
                                    <p>
                                        <i className="fa fa-map-marker" />
                                        <strong>Address:</strong>
                                         Kartaltepe Mahallesi Lavanta Çiçeği Sokak No:3 D: 1  34145 Bakırköy/İstanbul
                                     </p>
                                </li>
                                <li><p><i className="fa fa-phone" /> <strong>Phone:</strong> (0505) 292 60 25</p></li>
                                <li><p><i className="fa fa-phone" /> <strong>Phone:</strong> (0532) 596 48 21</p></li>
                                <li><p><i className="fa fa-envelope" /> <strong>Email:</strong> <a href="mailto:mail@example.com">av.mehmettunc@hotmail.com</a></p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h4>Sosyal Medya</h4>
                        <ul className="social-icons">
                            <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>

    )
}
