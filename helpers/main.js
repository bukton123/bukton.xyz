export default () => {
  (function () {
    const analyticScript = document.createElement('script')
    analyticScript.type = 'text/javascript'
    analyticScript.innerHTML = ` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-131386587-1');`
    document.body.appendChild(analyticScript)
  })()
}