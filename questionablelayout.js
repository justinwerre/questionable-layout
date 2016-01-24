function fixLayout(){
	// get the elements we want to move
	var news = document.getElementById("news");
	var comic = document.getElementById("comic");
	var main_container = document.getElementById("column-container");

	// create a new div to hold the comic and news
	var left_container = document.createElement("div");

	// provide some spacing between comic and news and make sure it's width matches the comic's width
	news.setAttribute("style", "margin-top:10px; width: 100%; padding: 0px");

	// move the margin from the comic to the left container to insure the right side ads
	// don't over lap the comics. set the display of the left-contaier to inline block so the
	// comic can dictate the containers width.
	comic.setAttribute("style", "margin-right: 0px");
	left_container.setAttribute("style", "display: inline-block; margin-right: 217px");

	// move the comic and news elements to the left container.
	left_container.appendChild(comic);
	left_container.appendChild(news);

	// add the left container to the main container
	main_container.appendChild(left_container);
}

fixLayout();