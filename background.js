var _favColor = [];
//var urlsList = ["https://*.twitter.com/*", "https://*.youtube.com/*"];

//var urlsList = chrome.storage.sync["siteList"].split('\n');
//var urlsList = [];

/*
var myURL = "not set yet";
window.addEventListener('load', function () {
    chrome.tabs.getSelected(null,function(tab){
        myURL=tab.url;
		console.log(myURL);
    });  
});	
*/

/*
chrome.storage.sync.get(['siteList'], function(result) {


		for(item in result.siteList){
			console.log('Value currently is ' + result.siteList[item]);
			urlsList.push(result.siteList);
		}
		
		
          console.log('Value currently is ' + result.siteList);
		  urls = result.siteList;
		  
		 
		 
		});
		
*/

//https://github.com/naderm/site-blocker/blob/master/block.js



var urlsList = [];

redirectUrl : chrome.extension.getURL("redirect.html")
	
	chrome.storage.sync.get("siteList", function (obj) {
		//console.log(obj.siteList);
		//urlsList = obj.siteList.split('\n');
		
		for(item in obj.siteList){
			console.log('Value currently is ' + obj.siteList[item]);
			urlsList.push(obj.siteList[item]);
		}
	});
		
		
chrome.webRequest.onBeforeRequest.addListener(function(details) {
	
	//var urlsList = chrome.storage.sync["siteList"].split('\n');
	/*
	var urlsList = [];
	
	
	chrome.storage.sync.get("siteList", function (obj) {
		//console.log(obj.siteList);
		//urlsList = obj.siteList.split('\n');
		
		for(item in obj.siteList){
			console.log('Value currently is ' + obj.siteList[item]);
			urlsList.push(obj.siteList);
		}
		
		//urlsList = obj.siteList;
		//urlsList = toString.urlsList.split('/');
	
	
	//console.log(urlsList);
	
	*/
	
	
	
		for(var i = 0; i < urlsList.length; i++){
			console.log(urlsList[i]);
		}
	
	
		for(item in urlsList) {
			console.log(urlsList[item]);
			console.log(urlsList.length);
			var urlStr = urlsList[item];
			console.log(urlStr + "This is the var from the array.");
			if(urlStr !== "" && details.url.match(new RegExp(urlStr))) {   //details.url.match(new RegExp(urlStr))
				console.log("Hello");
				return {redirectUrl : chrome.extension.getURL("redirect.html")};
				//redirectUrl : chrome.extension.getURL("redirect.html")
				//return {cancel: details.url.indexOf(urlStr) != -1};
				
			}
		}
	
		
		//return;
		 
		 /*});*/
		 

}, { urls: ["http://*/*", "https://*/*"]}, ["blocking"]);





/*
chrome.webRequest.onBeforeRequest.addListener(function(details) {
	
		for(item in urlsList){
          return {cancel: details.url.indexOf(item) != -1};
		}
        },
        {urls: ["<all_urls>"]},
        ["blocking"]);
*/