import React from "react";

export function Map():JSX.Element{
    return <div style={{width :'100%', height:'100%'}}>
    <iframe style={{display: 'block', width: '100%', border: 'none', overflowY: 'auto',overflowX: 'hidden',height: '580px'}} allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://129.159.142.51:4040/spatialstudio/ppp.html?proj_id=946ca7e25bbd71d3f17f7a6349f78c46&ui_elements=minimal"></iframe>
  </div>
}