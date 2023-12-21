//your JS code here. If required.

function removeItems() {
	let selectElement=document.getElementById("colorSelect");
	let sectedItemIndex=selectElement.selectedIndex;
	selectElement.remove(sectedItemIndex);
	
	
}
