# jQuery hashchange event #
[http://benalman.com/projects/jquery-hashchange-plugin/](http://benalman.com/projects/jquery-hashchange-plugin/)

Version: 1.3pre, Last updated: 7/6/2010

This jQuery plugin enables very basic bookmarkable #hash history via a cross-browser window.onhashchange event.

Visit the [project page](http://benalman.com/projects/jquery-hashchange-plugin/) for more information and usage examples!


## Documentation ##
[http://benalman.com/code/projects/jquery-hashchange/docs/](http://benalman.com/code/projects/jquery-hashchange/docs/)


## Examples ##
This working example, complete with fully commented code, illustrates one way
in which this plugin can be used.

[http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/](http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/)

## Support and Testing ##
Information about what version or versions of jQuery this plugin has been
tested with, what browsers it has been tested in, and where the unit tests
reside (so you can test it yourself).

### jQuery Versions ###
1.2.6, 1.3.2, 1.4.1, 1.4.2

### Browsers Tested ###
Internet Explorer 6-8, Firefox 2-4, Chrome 3-5, Safari 3-5, Opera 9.6-10.60, iPhone 3.1, Android 2.1, BlackBerry 4.6-5.

### Unit Tests ###
[http://benalman.com/code/projects/jquery-hashchange/unit/](http://benalman.com/code/projects/jquery-hashchange/unit/)


## A more robust solution ##

This plugin is, by design, very basic. If you want to add lot of extra utility around getting and setting the hash as a state, and parsing and merging fragment params, check out the [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/) plugin. It includes this plugin at its core, plus a whole lot more, and has thorough documentation and examples as well. You can't have too much of a good thing!


## Known issues ##

While this jQuery hashchange event implementation is quite stable and robust, there are a few unfortunate browser bugs surrounding expected hashchange event-based behaviors, independent of any JavaScript window.onhashchange abstraction. See the following examples for more information:

Chrome: Back Button  
[http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/](http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/)

Firefox: Remote XMLHttpRequest  
[http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/](http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/)

WebKit: Back Button in an Iframe  
[http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/](http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/)

Safari: Back Button from a different domain  
[http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/](http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/)


## Release History ##

1.3pre - (7/6/2010) Reorganized IE6/7 Iframe code to make it more "removable" for mobile development. Added jQuery.hashchangeDomain, jQuery.hashchangeIframeSrc properties and document-domain.html file to address access denied issues when setting document.domain in IE6/7. Note that when using jQuery.hashchangeIframeSrc, history won't be recorded in IE6/7 until the Iframe src file loads. Lowered the default jQuery.hashchangeDelay to 50 milliseconds. Added IE6/7 document.title support. Attempt to make Iframe as hidden as possible by using techniques from http://www.paciellogroup.com/blog/?p=604.  
1.2 - (2/11/2010) Fixed a bug where coming back to a page using this plugin from a page on another domain would cause an error in Safari 4. Also, IE6/7 Iframe is now inserted after the body (this actually works), which prevents the page from scrolling when the event is first bound. Event can also now be bound before DOM ready, but it won't be usable before then in IE6/7.  
1.1 - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug where browser version is incorrectly reported as 8.0, despite inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.  
1.0 - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special window.onhashchange functionality into a separate plugin for users who want just the basic event & back button support, without all the extra awesomeness that BBQ provides. This plugin will be included as part of jQuery BBQ, but also be available separately.


## License ##
Copyright (c) 2010 "Cowboy" Ben Alman  
Dual licensed under the MIT and GPL licenses.  
[http://benalman.com/about/license/](http://benalman.com/about/license/)
