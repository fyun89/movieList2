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
		" ",
		React.createElement(
			"button",
			{ id: "watched", onClick: props.toggleWatched },
			"Watched"
		)
	);
};

window.WatchToggle = WatchToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dhdGNoVG9nZ2xlLmpzeCJdLCJuYW1lcyI6WyJXYXRjaFRvZ2dsZSIsInByb3BzIiwidG9nZ2xlV2F0Y2hlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUU7QUFDOUIsUUFDQztBQUFBO0FBQUEsSUFBSyxJQUFHLGFBQVI7QUFDRTtBQUFBO0FBQUEsS0FBUSxJQUFHLFNBQVg7QUFBQTtBQUFBLEdBREY7QUFBQTtBQUN5QztBQUFBO0FBQUEsS0FBUSxJQUFHLFNBQVgsRUFBcUIsU0FBU0EsTUFBTUMsYUFBcEM7QUFBQTtBQUFBO0FBRHpDLEVBREQ7QUFLQSxDQU5EOztBQVFBQyxPQUFPSCxXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJ3YXRjaFRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXYXRjaFRvZ2dsZSA9IChwcm9wcykgPT4geyAvL3VwcGVyIGxldmVsIGlzIEFwcFxuXHRyZXR1cm4oXG5cdFx0PGRpdiBpZD1cIndhdGNoVG9nZ2xlXCI+XG5cdFx0XHRcdDxidXR0b24gaWQ9XCJ0b1dhdGNoXCI+VG8gV2F0Y2g8L2J1dHRvbj4gPGJ1dHRvbiBpZD1cIndhdGNoZWRcIiBvbkNsaWNrPXtwcm9wcy50b2dnbGVXYXRjaGVkfSA+V2F0Y2hlZDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbndpbmRvdy5XYXRjaFRvZ2dsZSA9IFdhdGNoVG9nZ2xlIl19