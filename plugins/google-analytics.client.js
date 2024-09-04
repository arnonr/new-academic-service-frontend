export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      (function() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-6TTDPNWB3D`;
        document.head.appendChild(script);
  
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-6TTDPNWB3D');
      })();
    }
  });
  