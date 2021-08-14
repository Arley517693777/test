        //判断用户使用的设备
        var deviceVal  = browserRedirect();
        function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            console.log(" %c Bookmarks By Arley %c https://arley.cn/ ", "color: #d2136b; background: #c7c4ea; border-radius: 5px; padding:5px;", "padding:5px;"),
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Arley517693777/navigation/css/bootstrapmo.css">');
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Arley517693777/navigation/css/xenon-coremo.css">');
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Arley517693777/navigation/css/xenon-componentsmo.css">');
            document.write('<div id="bg" style="background-image: url(https://cdn.jsdelivr.net/gh/Arley517693777/navigation/images/bgmobile.jpg)"></div>');
            return 'phone';
        } else {
            console.log(" %c Bookmarks By Arley %c https://arley.cn/ ", "color: #ffffff; background: #6ea9e5;  border-radius: 5px; padding:5px;", "padding:5px;"),
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Arley517693777/navigation/css/bootstrap.css">');
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Arley517693777/navigation/css/xenon-core.css">');
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Arley517693777/navigation/css/xenon-components.css">');
            document.write('<div id="bg" style="background-image: url(https://cdn.jsdelivr.net/gh/Arley517693777/navigation/images/bg.jpg)"></div>');
            return 'pc';
            }
        }
