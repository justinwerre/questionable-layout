function fixLayout(){
	// get the elements we want to move
	var news = document.getElementById("news");
	var comic = document.getElementById("comic");
	var main_container = document.getElementById("column-container");

	// create a new div to hold the comic and news
	var left_container = document.createElement("div");
	left_container.id = "left_container";

	// move the comic and news elements to the left container.
	left_container.appendChild(comic);
	left_container.appendChild(news);

	// add the left container to the main container
	main_container.appendChild(left_container);
}

fixLayout();