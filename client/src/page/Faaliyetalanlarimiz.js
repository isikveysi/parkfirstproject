import React, { useState, useEffect } from 'react'
import Danışmanlık from "../components/Danışmanlık"
import faaliyetalan from "../contetns/faaliyetcontetn.json"
import Ozlusoz from "../components/Ozlusöz"
const adaletsözleri = {
    title: "Memleketin direği adalettir her zaman, adalette nasibin saadettir her zaman",
    contents: [
        {
            text: " Mühendislik hesaplarına uyulmadan yapılan bir bina nasıl yıkılırsa, edebi bir kanun olan adaletten mahrum bulunan imparatorluklar da öylece çökerler. ",
            auther: "Lacordaire"
        },
        {
            text: "Medeniyetin temel unsurları adalet ve ahlaktır. Bunlar zayıfladıkça medeniyet çürür.  ",
            auther: "Hakan Yıldız"
        },
        {
            text: "Ahlaki nizam, adalet sayesinde kurulabilir ve hiçbir şey onsuz devam edemez. ",
            auther: "Lacordaire"
        }

    ]
}

export default function Faaliyetalanlarimiz() {
    const [faaliyet, setFaaliyet] = useState("Hukuki Danışmanlık")
    const [content, setContent] = useState({})
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
        setContent(faaliyetalan[faaliyet])
    }, [faaliyet])

    const onclick = (e) => {
        const durum = e.target.name
        setFaaliyet(durum)
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>FAALİYET ALANLARIMIZ</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="blog-posts">
                            {
                                faaliyet == "Hukuki Danışmanlık"
                                    ?
                                    <Danışmanlık />
                                    :
                                    content && <article className="post post-large">
                                        <div className="post-image single">
                                            <img className="img-thumbnail" src={content.img} style={{ height: "40vh", width: "100%" }} />
                                        </div>
                                        <div className="post-date">
                                            <span className="day">9</span>
                                            <span className="month">Eylül</span>
                                        </div>
                                        <div className="post-content">
                                            <h2><a href="#">{content.title}</a></h2>
                                            <p>{content.text}</p>
                                        </div>


                                        <div className="post-content">
                                            <h4><a href="#">{content.subtitle}</a></h4>
                                            {
                                                content.subtex && content.subtex.map((text, index) => (
                                                    <p key={index}>{text}</p>
                                                ))
                                            }
                                        </div>
                                    </article>
                            }

                        </div>
                    </div>
                    <div className="col-md-3">
                        <aside className="sidebar">
                            <h4 className="heading-primary">HUKUKİ DANIŞMANLIK</h4>
                            <ul className="nav nav-list mb-xlg">
                                <li  >
                                    <a name="Hukuki Danışmanlık" onClick={onclick} className={faaliyet == "Hukuki Danışmanlık" ? "active" : ""} href="#">Hukuki Danışmanlık</a>
                                </li>
                            </ul>
                            <h4 className="heading-primary">Faaliyetlerimiz</h4>
                            <ul className="nav nav-list mb-xlg">
                                <li  >
                                    <a name="Ceza Hukuku" onClick={onclick} className={faaliyet == "Ceza Hukuku" ? "active" : ""} href="#">Ceza Hukuku </a>
                                </li>
                                <li >
                                    <a name="Iş Hukuku" onClick={onclick} className={faaliyet == "Iş Hukuku" ? "active" : ""} href="#">Iş Hukuku </a>
                                </li>
                                <li >
                                    <a name="Bilişim Hukuku" onClick={onclick} className={faaliyet == "Bilişim Hukuku" ? "active" : ""} href="#">Bilişim Hukuku </a>
                                </li>
                                <li>
                                    <a name="Aile Hukuku" onClick={onclick} className={faaliyet == "Aile Hukuku" ? "active" : ""} href="#">Aile Hukuku </a>
                                </li>
                                <li >
                                    <a name="Gayrimenkul Hukuku" onClick={onclick} className={faaliyet == "Gayrimenkul Hukuku" ? "active" : ""} href="#">Gayrimenkul Hukuku</a>
                                </li>
                                <li >
                                    <a name="Icra ve Iflas  Hukuku" onClick={onclick} className={faaliyet == "Icra ve Iflas  Hukuku" ? "active" : ""} href="#">Icra ve Iflas  Hukuku </a>
                                </li>
                                <li >
                                    <a name="Iş ve Sosyal Güvenlik  Hukuku" onClick={onclick} className={faaliyet == "Iş ve Sosyal Güvenlik  Hukuku" ? "active" : ""} href="#">Iş ve Sosyal Güvenlik  Hukuku </a>
                                </li>
                                <li>
                                    <a name="Ticaret Ve Sirketler Hukuku" onClick={onclick} className={faaliyet == "Ticaret Ve Sirketler Hukuku" ? "active" : ""} href="#">Ticaret Ve Sirketler Hukuku </a>
                                </li>
                                <li >
                                    <a name="Inşaat  Hukuku" onClick={onclick} className={faaliyet == "Inşaat  Hukuku" ? "active" : ""} href="#">Inşaat  Hukuku </a>
                                </li>

                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
            <Ozlusoz ozlusoz={adaletsözleri} />
        </>
    )
}
