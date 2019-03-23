var link = document.querySelector(".contacts-btn");
			var popup = document.querySelector(".modal-write-us");
			var close = document.querySelector(".modal-close");
			var linkmap = document.querySelector(".map-link");
			var popupmap = document.querySelector(".map-popup");
			var closemap = document.querySelector(".map-close");

			link.addEventListener("click", function (evt) {
				evt.preventDefault();
				popup.classList.add("modal-show");
			});
			
			close.addEventListener("click", function (evt) {
				popup.classList.remove("modal-show");
			});

			linkmap.addEventListener("click", function (evt) {
				evt.preventDefault();
				popupmap.classList.add("map-show");
			});

			closemap.addEventListener("click", function (evt) {
				popupmap.classList.remove("map-show");
			});