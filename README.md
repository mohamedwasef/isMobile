# isMobile

A simple JS library that detects mobile devices.

## How it works

isMobile runs quickly during initial page load to detect mobile devices; it then creates a JavaScript object with the results.

## Devices detected by isMobile

The following properties of the global `isMobile` object will either be `true` or `false`

### Apple devices

* `isMobile.apple.phone`
* `isMobile.apple.ipod`
* `isMobile.apple.tablet`
* `isMobile.apple.device` (any mobile Apple device)

### Android devices

* `isMobile.android.phone`
* `isMobile.android.tablet`
* `isMobile.android.device` (any mobile Android device)

### Amazon Silk devices (also passes Android checks)

* `isMobile.amazon.phone`
* `isMobile.amazon.tablet`
* `isMobile.amazon.device` (any mobile Amazon Silk device)

### Windows devices

* `isMobile.windows.phone`
* `isMobile.windows.tablet`
* `isMobile.windows.device` (any mobile Windows device)

### Specific seven inch devices

* `isMobile.seven_inch`
	* `true` if the device is one of the following 7" devices:
		- Nexus 7
		- Kindle Fire
		- Nook Tablet 7 inch
		- Galaxy Tab 7 inch

### "Other" devices

* `isMobile.other.blackberry_10`
* `isMobile.other.blackberry`
* `isMobile.other.opera` (Opera Mini)
* `isMobile.other.firefox`
* `isMobile.other.chrome`
* `isMobile.other.device` (any "Other" device)

### Aggregate Groupings

* `isMobile.any` - any device matched
* `isMobile.phone` - any device in the 'phone' groups above
* `isMobile.tablet` - any device in the 'tablet' groups above


## Example Usage

I include the minified version of the script, inline, and at the top of the `<head>`. Cellular connections tend to suck, so it would be wasteful overhead to open another connection, just to download ~1.8kb of JS:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script>
        // Minified version of isMobile included in the HTML since it's small
        !function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);


        // My own arbitrary use of isMobile, as an example
        (function () {
            var MOBILE_SITE = '/mobile/index.html', // site to redirect to
                NO_REDIRECT = 'noredirect'; // cookie to prevent redirect

            // I only want to redirect iPhones, Android phones and a handful of 7" devices
            if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {

                // Only redirect if the user didn't previously choose
                // to explicitly view the full site. This is validated
                // by checking if a "noredirect" cookie exists
                if ( document.cookie.indexOf(NO_REDIRECT) === -1 ) {
                    document.location = MOBILE_SITE;
                }
            }
        })();
    </script>
</head>
<body>
    <!-- imagine lots of html and content -->
</body>
</html>
```

### Style.css
You can use style.css to make your custom changes

