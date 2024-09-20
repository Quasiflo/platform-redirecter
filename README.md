# 🌐 Platform Redirecter

A tiny JavaScript utility to automatically redirect users on different platforms to different links. For example, redirecting to the correct app store based on their device! 🚀

### [🚀🚀 TRY IT 🚀🚀](https://Attempt3035.github.io/platform-redirecter/)

## ✨ Features
- 🖥️ Android, iOS, macOS, Windows & Linux
- 🔄 Fallback & Fall-through URL option for unsupported platforms.
- 🏗️ Replace URL or redirect (allowing back button).
- 🍏 Returns result of function (redirected & platform)

## 📦 Installation

### Via JSDELIVR CDN
Include the following script tag in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/Attempt3035/platform-redirecter@refs/heads/main/redirecter.min.js"></script>
```

### 🧰 Manually
Download or clone this repository and copy/include the [`redirecter.js`](redirecter.js) file/contents in your project.

As a script tag:
```html
<script src="redirecter.js"></script>
```

Or copy the function directly into your html file:
```html
<script>
function redirectURL({ androidUrl, iosUrl, osxUrl, linuxUrl, windowsUrl, fallbackUrl, replace = false }) {
    // Function code...
}
</script>
```

Or import it in your JavaScript file:
```javascript
import redirectURL from './redirecter.js';
```

## 🚀 Usage
Call the `redirectURL` function with the desired URLs and options. The function will automatically redirect the user to the correct URL based on their platform. Unset URLs will be ignored.

### 📜 Complete Example
```javascript
redirectURL({
    androidUrl: "https://brave.com/download/",
    iosUrl: "https://www.apple.com/safari/",
    osxUrl: "https://duckduckgo.com/app",
    linuxUrl: "https://www.mozilla.org/en-US/firefox/linux/",
    windowsUrl: "https://www.microsoft.com/en-us/edge/download",
    fallbackUrl: "https://www.google.com/chrome/",
    replace: true,
    customPlatforms: [
        { regex: /PlayStation/i, url: "https://example.com/playstation" },
        { regex: /Nintendo/i, url: "https://example.com/nintendo" },
    ],
});
```

### 🔧 Parameters
| Parameter     | Type    | Description                                                        |
|---------------|---------|--------------------------------------------------------------------|
| `androidUrl`  | string  | URL to redirect for Android devices.                               |
| `iosUrl`      | string  | URL to redirect for iOS devices (iPhone, iPad, iPod).              |
| `osxUrl`      | string  | URL to redirect for macOS devices.                                 |
| `linuxUrl`    | string  | URL to redirect for Linux-based devices.                           |
| `windowsUrl`  | string  | URL to redirect for Windows devices.                               |
| `fallbackUrl` | string  | URL to redirect if no platform match is found.                     |
| `replace`     | boolean | Whether to replace the current page in history. If true, the back button will not lead back to this page. (default: `false`) |
| `customPlatforms` | array | An array of custom {regex, url} objects to specify additional platform redirections. Each regex is tested against the user agent. Example: `[{ regex: /PlayStation/i, url: "https://example.com/playstation" }]` |

### 🔨 Use Cases

#### Redirect to platform-native App Store (Custom URI schemes):
If you use app specific URLs, you can launch the device's native app store directly to your app.

```javascript
redirectAPP({
    androidUrl: "market://details?id=com.brave.browser",
    iosUrl: "itms-apps://itunes.apple.com/au/app/safari/id1146562112",
    osxUrl: "itms-apps://itunes.apple.com/au/app/duckduckgo-private-browser/id663592361",
    windowsUrl: "ms-windows-store://pdp/?ProductId=xpfftq037jwmhs",
});
```

#### Trigger on window load:
```javascript
window.onload = function () {
    // Use redirect function and/or your other logic here
};
```

## 🛠️ Contributing
Under the hood, we check the user agent string to determine the platform. If you find any issues or have a better way to detect the platform, please let me know!

Feel free to open issues or pull requests to improve this repo!

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for more information.

## 🎉 Happy redirecting!