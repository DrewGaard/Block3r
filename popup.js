var siteList = [];

function addToList() {
	var text = document.getElementById("site").value;
	siteList.push("https://www." + text + ".com");
	
	chrome.storage.sync.set({ 'siteList': siteList });
	
	//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
	
	//https://stackoverflow.com/questions/28205654/javascript-add-li-to-ul-using-array
	
	//var node = document.createElement("LI");
   // var textnode = document.createTextNode("https://www." + text + ".com");
   // node.appendChild(textnode);
    //document.getElementById("myList").appendChild(node);
	
	location.reload();
	
	chrome.extension.getBackgroundPage().window.location.reload();
	
	
}




function removeFromList() {
	var text = document.getElementById("siteRemove").value;
	var index = siteList.indexOf("https://www." + text + ".com");
	siteList.splice(index, 1);
	
	chrome.storage.sync.set({ 'siteList': siteList });
	
	location.reload();
	chrome.extension.getBackgroundPage().window.location.reload();
	
}





// Saves options to chrome.storage

/*
function save_options() {
  //var color = document.getElementById('color').value;
  //var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    //favoriteColor: color,
    //likesColor: likesColor,
	siteList: siteList
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  
  //chrome.runtime.reload();
  
}
*/


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    //favoriteColor: 'red',
   // likesColor: true,
	siteList: siteList
  }, function(items) {
    //document.getElementById('color').value = items.favoriteColor;
    //document.getElementById('like').checked = items.likesColor;
	siteList = items.siteList;
	//document.getElementById("sitesParagraph").innerHTML = items.siteList;
	var mainList = document.getElementById("myList");

	//console.log(items.siteList.length);
	//console.log(items.siteList[0]);
	
	for(var i=0;i<items.siteList.length;i++){
			 var item = items.siteList[i];
			 var elem = document.createElement("li");
			 elem.value=item[0];
			 elem.innerHTML=item;

			 mainList.appendChild(elem);
		}
		
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
//document.getElementById('save').addEventListener('click', save_options);
document.getElementById("add").addEventListener('click', addToList);
document.getElementById("remove").addEventListener('click', removeFromList);