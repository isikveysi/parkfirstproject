import React,{useEffect} from 'react'

export default function Bloglar() {
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
        <div>
            <p>block</p>
        </div>
    )
}
