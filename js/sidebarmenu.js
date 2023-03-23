const menu = document.querySelector(".menu"); // get menu item for click event
const main = document.querySelector(".main"); 

menu.addEventListener("click", function () {
	expandSidebar();
	showHover();

});
main.addEventListener("click", function () {
	document.querySelector("body").classList.add("short");
});
/**
 * expand sidebar if it is short, otherwise collapse it
 */
function expandSidebar() {
	// document.querySelector("body").classList.add("short");
	document.querySelector("body").classList.toggle("short");
	let keepSidebar = document.querySelectorAll("body.short");
	if (keepSidebar.length === 1) {
		localStorage.setItem("keepSidebar", "true");
	} else {
		localStorage.removeItem("keepSidebar");
	}
}

/**
 * show hover effect on sidebar
 */
function showHover() {
	const li = document.querySelectorAll(".short .sidebar li a");
	if (li.length > 0) {
		li.forEach(function (item) {
			item.addEventListener("mouseover", function () {
				const text = item.querySelector(".text");
				text.classList.add("hover");
			});
			item.addEventListener("mouseout", function () {
				const text = item.querySelector(".text");
				text.classList.remove("hover");
			});
		});
	}
}


/**
 * check local storage for keep sidebar
 */
function showStoredSidebar() {
	if (localStorage.getItem("keepSidebar") === "true") {
		document.querySelector("body").classList.add("short");
		showHover();
	}
}

showStoredSidebar(); // show sidebar if stored in local storage

document.addEventListener("DOMContentLoaded", function(){
	document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
	  
	  element.addEventListener('click', function (e) {
  
		let nextEl = element.nextElementSibling;
		let parentEl  = element.parentElement;	
  
		  if(nextEl) {
			  e.preventDefault();	
			  let mycollapse = new bootstrap.Collapse(nextEl);
			  
			  if(nextEl.classList.contains('show')){
				mycollapse.hide();
			  } else {
				  mycollapse.show();
				  // find other submenus with class=show
				  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
				  // if it exists, then close all of them
				  if(opened_submenu){
					new bootstrap.Collapse(opened_submenu);
				  }
			  }
		  }
	  }); // addEventListener
	}) // forEach
  }); 
  // DOMContentLoaded  end
