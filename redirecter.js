function redirectURL({ 
    androidUrl, 
    iosUrl, 
    osxUrl, 
    linuxUrl, 
    windowsUrl, 
    fallbackUrl, 
    customPlatforms = [], // Array of custom {regex, url} pairs
    replace = false 
}) {
    const userAgent = navigator.userAgent || window.opera;

    const platforms = {
        androidUrl: { regex: /Android/i, url: androidUrl },
        iosUrl: { regex: /iPhone|iPad|iPod/i, url: iosUrl },
        osxUrl: { regex: /Macintosh|Mac OS X/i, url: osxUrl },
        linuxUrl: { regex: /Linux/i, url: linuxUrl },
        windowsUrl: { regex: /Windows NT|IEMobile/i, url: windowsUrl },
    };

    const reroute = (url) => {
        if (replace) {
            location.replace(url);
        } else {
            window.location.href = url;
        }
    };

    // Check predefined platforms
    for (const platform of Object.values(platforms)) {
        if (platform.regex.test(userAgent) && platform.url) {
            return reroute(platform.url);
        }
    }

    // Check custom platforms
    for (const customPlatform of customPlatforms) {
        if (customPlatform.regex.test(userAgent) && customPlatform.url) {
            return reroute(customPlatform.url);
        }
    }

    // If no match, fallback
    if (fallbackUrl) {
        reroute(fallbackUrl);
    }
}
