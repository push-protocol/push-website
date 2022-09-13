import React from 'react';

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone';
    }

    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }

    return 'unknown';
}

const PlatformURLS = {
    ANDROID: 'https://play.google.com/store/apps/details?id=io.epns.epns',
    IOS: 'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    BROWSER_EXT: 'https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg'
};

function RedirectToPlatform() {
    const device = getMobileOperatingSystem();

    if (device === 'Android') {
        window.location = PlatformURLS.ANDROID;
    }
    else if (device === 'iOS') {
        window.location = PlatformURLS.IOS;
    }
    else {
        window.location = PlatformURLS.BROWSER_EXT;
    }

    return (<section>Redirecting...</section>);
}

export default RedirectToPlatform;
