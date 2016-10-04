(function() {
    var _UA = navigator.userAgent;
    if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1 || _UA.indexOf('Android') > -1) {
        console.log("ios");
        document.write('<link rel="stylesheet" href="common/css/sp.css">');
    } else {
        console.log("pc");
        document.write('<link rel="stylesheet" href="common/css/pc.css">');
    }
})();
