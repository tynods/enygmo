//filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("entry");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}


function filterNumName_() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("filtreNom");
	filter = input.value.toUpperCase();
	gal = document.getElementById("gal");
	items = gal.getElementsByClassName("entry");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < items.length; i++) {
		titre = items[i].getElementsByTagName("h4")[0];
		if (titre) {
			txtValue = titre.textContent || titre.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				w3AddClass(items[i], "fltrN")
			} else {
				w3RemoveClass(items[i], "fltrN");
			}
		}
	}
}

function filterPeople_() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("filtrePeople");
	filter = input.value.toUpperCase();
	gal = document.getElementById("gal");
	items = gal.getElementsByClassName("entry");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < items.length; i++) {
		titre = items[i].getElementsByTagName("p")[0];
		if (titre) {
			txtValue = titre.textContent || titre.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				w3AddClass(items[i], "fltrP")
			} else {
				w3RemoveClass(items[i], "fltrP");
			}
		}
	}
}




		
// Get the image and insert it inside the modal - use its "alt" text as a caption
function showModal(idimg) {
	// Get the modal
	var modal = document.getElementById("myModal");
	var img = document.getElementById(idimg);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	} 
}



function filterNumName() {
	input = document.getElementById("filtreNom");
	var searchStyle_N = document.getElementById('search_style_N');
	if (!input.value) {
		searchStyle_N.innerHTML = "";
		return;
	}
	searchStyle_N.innerHTML = ".searchable:not([data-name*=\"" + input.value.toLowerCase() + "\" i]) { display: none; }";
};


function filterPeople() {
	input = document.getElementById("filtrePeople");
	var searchStyle_P = document.getElementById('search_style_P');
	if (!input.value) {
		searchStyle_P.innerHTML = "";
		return;
	}
	searchStyle_P.innerHTML = ".searchable:not([data-people*=\"" + input.value.toLowerCase() + "\" i]) { display: none; }";
};
