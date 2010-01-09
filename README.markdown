# jQuery hashchange event #
[http://benalman.com/projects/jquery-hashchange-plugin/](http://benalman.com/projects/jquery-hashchange-plugin/)

Version: 1.1, Last updated: 1/9/2010

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
1.3.2, 1.4a2

### Browsers Tested ###
Internet Explorer 6-8, Firefox 2-3.7, Safari 3-4, Chrome, Opera 9.6-10.1.

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


## Release History ##

1.0 - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special window.onhashchange functionality into a separate plugin for users who want just the basic event & back button support, without all the extra awesomeness that BBQ provides. This plugin will be included as part of jQuery BBQ, but also be available separately.


## License ##
Copyright (c) 2010 "Cowboy" Ben Alman  
Dual licensed under the MIT and GPL licenses.  
[http://benalman.com/about/license/](http://benalman.com/about/license/)
