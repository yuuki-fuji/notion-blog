import Script from "next/script"
import { CONFIG } from "site.config"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleTagManager?.enable === true && (
      <>
        <Script strategy="afterInteractive">
          {`
            (
              function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })
            (window,document,'script','dataLayer','${CONFIG.googleTagManager.config.containerId}');
          `}
        </Script>
        <noscript>
          {`
            <iframe src="https://www.googletagmanager.com/ns.html?id=${CONFIG.googleTagManager.config.containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `}
        </noscript>
      </>
    )}
  </>
)

export default Scripts
