import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-119741426-1`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-119741426-1');
        `}
      </Script>
      <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="MT1gPz0jD4KHEwCn" data-version="062024"></script>
      <Script strategy="lazyOnload" id="mouseflow">
        {`
        window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/43690825-7542-4d4e-a475-df82488129ad.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })();
        `}
      </Script>
      <Script
        id="fullstory"
        strategy="lazyOnload"
      >
        {`
          window['_fs_host'] = 'fullstory.com';
          window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
          window['_fs_org'] = 'o-1CJXR4-na1';
          window['_fs_namespace'] = 'FS';
          (function(m,n,e,t,l,o,g,y){
              if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
              g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
              o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
              y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
              g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
              g.anonymize=function(){g.identify(!!0)};
              g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
              g.log = function(a,b){g("log",[a,b])};
              g.consent=function(a){g("consent",!arguments.length||a)};
              g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
              g.clearUserCookie=function(){};
              g.setVars=function(n, p){g('setVars',[n,p]);};
              g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
              if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
              g._v="1.3.0";
          })(window,document,window['_fs_namespace'],'script','user');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
