import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
const Anasayfa = React.lazy(() => import('./page/Anasayfa'));
const FaaliyetAlanlarimiz = React.lazy(() => import('./page/Faaliyetalanlarimiz'));
const Bloglar = React.lazy(() => import('./page/Bloglar'));
const Hakkimizda = React.lazy(() => import('./page/Hakkimizda'));
const Iletisim = React.lazy(() => import('./page/Iletisim'));

function App() {
  return (
    <>
     
      <Header />
      <ScrollToTop />
      <div role="main" className="main">    
        <Switch>
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <Route exact path='/' component={Anasayfa}></Route>
            <Route exact path='/faaliyet-alanlarimiz' component={FaaliyetAlanlarimiz}></Route>
            <Route exact path='/makaleler' component={Bloglar}></Route>
            <Route exact path='/hakkimizda' component={Hakkimizda}></Route>
            <Route exact path='/iletisim' component={Iletisim}></Route>
          </Suspense>
        </Switch>
        <Footer />
      </div>

    </>
  );
}

export default App;
