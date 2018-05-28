"use strict";

var WatchToggle = function WatchToggle(props) {
	//upper level is App
	return React.createElement(
		"div",
		{ id: "watchToggle" },
		React.createElement(
			"button",
			{ id: "toWatch" },
			"To Watch"
		),
		React.createElement(
			"button",
			{ id: "watched", onClick: props.toggleWatched },
			"Watched"
		),
		React.createElement(
			"button",
			{ id: "refresh", onClick: props.toggleRefresh },
			"Show All"
		)
	);
};

window.WatchToggle = WatchToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dhdGNoVG9nZ2xlLmpzeCJdLCJuYW1lcyI6WyJXYXRjaFRvZ2dsZSIsInByb3BzIiwidG9nZ2xlV2F0Y2hlZCIsInRvZ2dsZVJlZnJlc2giLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFFO0FBQzlCLFFBQ0M7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0U7QUFBQTtBQUFBLEtBQVEsSUFBRyxTQUFYO0FBQUE7QUFBQSxHQURGO0FBRUU7QUFBQTtBQUFBLEtBQVEsSUFBRyxTQUFYLEVBQXFCLFNBQVNBLE1BQU1DLGFBQXBDO0FBQUE7QUFBQSxHQUZGO0FBR0U7QUFBQTtBQUFBLEtBQVEsSUFBRyxTQUFYLEVBQXFCLFNBQVNELE1BQU1FLGFBQXBDO0FBQUE7QUFBQTtBQUhGLEVBREQ7QUFPQSxDQVJEOztBQVVBQyxPQUFPSixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJ3YXRjaFRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXYXRjaFRvZ2dsZSA9IChwcm9wcykgPT4geyAvL3VwcGVyIGxldmVsIGlzIEFwcFxuXHRyZXR1cm4oXG5cdFx0PGRpdiBpZD1cIndhdGNoVG9nZ2xlXCI+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJ0b1dhdGNoXCI+VG8gV2F0Y2g8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cIndhdGNoZWRcIiBvbkNsaWNrPXtwcm9wcy50b2dnbGVXYXRjaGVkfSA+V2F0Y2hlZDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwicmVmcmVzaFwiIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZVJlZnJlc2h9ID5TaG93IEFsbDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbndpbmRvdy5XYXRjaFRvZ2dsZSA9IFdhdGNoVG9nZ2xlIl19