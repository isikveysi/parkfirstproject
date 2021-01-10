import React from 'react'
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
export default function Header() {

    return (
        <header id="header"
            data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 57, 'stickySetTop': '-57px', 'stickyChangeLogo': true}">
            <div className="header-body">
                <div className="header-container container">
                    <div className="header-row">
                        {/* logo- start */}
                        <div className="header-column">
                            <div className="header-logo">
                                <a href="/">
                                    <img alt="Porto" width={250} height={54} data-sticky-top={33} src="img/parkimg/logo2.jpg" />
                                </a>
                            </div>
                        </div>
                        {/* logo- end */}
                        {/* iletişim bilgiler start */}
                        <div className="header-column">
                            <div className="header-row">

                                <nav className="header-nav-top">
                                    <ul className="nav nav-pills">
                                        <li className="hidden-xs">
                                            <a ><i className="far fa-envelope" /> av.mehmettunc@hotmail.com</a>
                                        </li>
                                        <li className="hidden-xs">
                                            <a ><i className="fa fa-phone" />(0505) 292 60 25 </a>
                                        </li>
                                        <li>
                                            <a ><i className="fa fa-phone" />(0532) 596 48 21</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                            {/* iletişim bilgiler end */}
                            <div className="header-row">
                                <div className="header-nav">
                                    {/* menu bar start */}
                                    <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                                        <i className="fa fa-bars" />
                                    </button>
                                    {/* menu bar end */}
                                    {/* sosyal medya start */}
                                    <ul className="header-social-icons social-icons hidden-xs">
                                        <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a></li>
                                        <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                    {/* sosya medya end */}
                                    {/* Menu navigation start */}
                                    <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse" >
                                        <nav>
                                            <ul className="nav nav-pills" id="mainNav">

                                                {/* <li>
                                                    <a href="/" className={"/" == useLocation().pathname ? "active" : "" } >
                                                        <i className="fas fa-home"></i> ANASAYFA
                                                    </a>
                                                </li>
                                                <li> <a href="/faaliyet-alanlarimiz" className={"/faaliyet-alanlarimiz" == useLocation().pathname ? "active" : "" }
                                                        target=" _blank" > <i className="fas fa-infinity"></i> FAALİYET ALANLARIMIZ
                                                     </a>
                                                </li>
                                                <li> <a href="/makaleler" className={"/makaleler" == useLocation().pathname ? "active" : "" }
                                                        target=" _blank" > <i className="fas fa-edit"></i> MAKALELER
                                                     </a>
                                                </li>
                                                <li> <a href="/hakkimizda" className={"/hakkimizda" == useLocation().pathname ? "active" : "" }
                                                        target=" _blank" > <i className="fas fa-balance-scale"></i> HAKKIMIZDA
                                                     </a>
                                                </li>
                                                <li> <a href="/iletisim" className={"/iletisim" == useLocation().pathname ? "active" : "" }
                                                        target=" _blank" > <i className="far fa-envelope"></i>ILETISIM
                                                     </a>
                                                </li> */}

                                                <li> <NavLink exact to="/" activeClassName="active"><i className="fas fa-home"></i> ANASAYFA</NavLink></li>
                                                <li> <NavLink exact to="/faaliyet-alanlarimiz" activeClassName="active"><i className="fas fa-infinity"></i> FAALİYET ALANLARIMIZ</NavLink></li>
                                                <li> <NavLink exact to="/makaleler" activeClassName="active"> <i className="fas fa-edit "></i>MAKALELER</NavLink></li>
                                                <li>  <NavLink exact to="/hakkimizda" activeClassName="active"><i className="fas fa-balance-scale "></i> HAKKIMIZDA</NavLink></li>
                                                <li> <NavLink exact to="/iletisim" activeClassName="active"> <i className="far fa-envelope "></i> ILETISIM</NavLink></li>

                                            </ul>
                                        </nav>
                                    </div>
                                    {/* Menu navigation end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
