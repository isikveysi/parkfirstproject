import React, {  useEffect } from 'react'
import Ozlusoz from "../components/Ozlusöz"
const ozlusoz =
{
    title: "Adalet, toplumların nefes borularıdır",
    contents: [
        {
            text: " Adalet dünyadan kalkarsa, insan hayatına değer verecek bir şey kalmaz",
            auther: "İ. Kant"
        },
        {
            text: "Adaleti, yüksek bir kanun olarak kabul etmekten vazgeçen millet, bu felaketini hiçbir başarı ile telafi edemez.  ",
            auther: "W.E.Channıng"
        },
        {
            text: "Adalet, milletlerin ekmeğidir; milletler daima adalete acıkırlar",
            auther: "Herakleitos  "
        },
    ]
}
export default function Hakkimizda() {
    useEffect(() => {
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
      loadScript("/vendor/bootstrap/js/bootstrap.min.js")   
      })
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Hakkımızda</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="owl-carousel owl-theme" data-plugin-options="{'items': 1, 'margin': 10}">
                            <div>
                                <span className="img-thumbnail">
                                    <img height={300} className="img-responsive" src="img/parkimg/mehmetTunc.jpg" />
                                </span>
                            </div>
                            <div>
                                <span className="img-thumbnail">
                                    <img height={300} className="img-responsive" src="img/parkimg/mehmetTunc.jpg" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-none">Dr. Mehmet <strong>TUNC</strong></h2>
                        <h4 className="heading-primary">AVUKAT</h4>
                        <hr className="solid" />
                        <p style={{ textIndent: "50px" }}>
                            Av. Mehmet Tunç 1975 yılında Gaziantep’te doğmuştur. İlkokul orta okul ve lise eğitimiİ burada tamamladıktan sonra  …………. tarihinde  Adana Polis okulunda  eğitim almıştır.  Polis olarak görev yaparken ……………. yılları arasında  İstanbul üniversitesi fen Edebiyat Fakültesinde Coğrafya Bölümünde Lisans ve Yüksek Lisans Eğitimini tamamlamıştır.

                            2014 yılında Kültür Üniversitesi Hukuk Fakültesinden mezun olmuş ve  bağımsız avukat olarak göreve başlamıştır.

                            Avukat Mehmet Tunç, 2015 yılından beri hem yerli hem yabancı şahıs ve şirketlere ticaret hukuku, iş hukuku, şirketler hukuku, yabancılar hukuku, aile hukuku, icra hukuku, sözleşmeler hukuku, gayrimenkul hukuku, ceza hukuku, miras hukuku alanlarında avukatlık hizmeti vermektedir.
                            Avukat Mehmet Tunç ,çalışmalarında  hukukun üstünlüğü, insan haklarına saygı, gizlilik, dürüstlük, güven, profesyonellik prensipleri ve ilkeleri doğrultusunda hareket etmektedir.
                            Avukat Mehmet Tunç, ;uyuşmazlıkların dava açılmadan sulh ya da uzlaşma yoluyla çözümü, dava süreçlerinin baştan sona takip edilmesi, olası risklerin analiz edilerek müvekkillere bildirilmesi, müvekkillerin dava süreci boyunca bilgilendirilmesi, müvekkillerin hak ve çıkarlarının güvence altına
                            alınması ile her türlü hukuki başvurular konusunda müvekkillerine hukuki danışmanlık ve avukatlık hizmeti sağlamaktadır.

                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>
            </div>
            <Ozlusoz ozlusoz={ozlusoz} />

        </>
    )
}
