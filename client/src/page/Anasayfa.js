import React, {useEffect} from 'react'

import Slider from '../components/Slider'
import Ozlusoz from "../components/Ozlusöz"
import Faaliyetlerimiz from '../components/Faaliyetlerimiz'
const ozlusoz=
    {
            title:"Adalet erdemlerin kraliçesidir",
            contents:[
                {
                  text:" Bir memlekette adalet müessesesi sağlam kaldıkça, diğer herhangi bir müessesenin ciddi surette bozulmasına imkan kalmaz. ",
                  auther:"A.Rıza Türel"
                },
                {
                    text:"Adaleti, yüksek bir kanun olarak kabul etmekten vazgeçen millet, bu felaketini hiçbir başarı ile telafi edemez.  ",
                    auther:"W.E.Channıng"
                  },
                  {
                    text:"Eğer bir ülkede adalet yozlaşırsa, o memleketin dibi oyulmuş demektir. Adaleti çökmüş bir milleti yok olmaktan hiçbir güç kurtaramaz.",
                    auther:"Yaşar Kemal"
                  },
            ]
    }

export default function Anasayfa() {
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


  })

    return (
        <div>
            <Slider />
            <Ozlusoz ozlusoz={ozlusoz} />
            <Faaliyetlerimiz/>
        </div>
    )
}
