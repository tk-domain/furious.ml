_satellite.pushAsyncScript(function(event, target, $variables){
  (function(win,doc){

var scriptElement, scrSrc;

if (typeof (win.ClickTaleCreateDOMElement) != "function")
{
	win.ClickTaleCreateDOMElement = function(tagName)
	{
		if (doc.createElementNS)
		{
			return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return doc.createElement(tagName);
	}
}

win.WRInitTime=(new Date()).getTime();

scriptElement = ClickTaleCreateDOMElement('script');
scriptElement.type = "text/javascript";

scrSrc = doc.location.protocol=='https:'? 'https://cdnssl.clicktale.net/':	'http://cdn.clicktale.net/';

scrSrc += 'www12/ptc/7ebff8e6-e164-4289-a6dd-bbba9ede7903.js';

scriptElement.src = scrSrc;

doc.getElementsByTagName('body')[0].appendChild(scriptElement);
})(window,document);
});
