"use strict";

var WatchToggle = function WatchToggle(props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dhdGNoVG9nZ2xlLmpzeCJdLCJuYW1lcyI6WyJXYXRjaFRvZ2dsZSIsInByb3BzIiwidG9nZ2xlV2F0Y2hlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFFBQ0M7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0U7QUFBQTtBQUFBLEtBQVEsSUFBRyxTQUFYO0FBQUE7QUFBQSxHQURGO0FBQUE7QUFDeUM7QUFBQTtBQUFBLEtBQVEsSUFBRyxTQUFYLEVBQXFCLFNBQVNBLE1BQU1DLGFBQXBDO0FBQUE7QUFBQTtBQUR6QyxFQUREO0FBS0EsQ0FORDs7QUFRQUMsT0FBT0gsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoid2F0Y2hUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgV2F0Y2hUb2dnbGUgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxkaXYgaWQ9XCJ3YXRjaFRvZ2dsZVwiPlxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwidG9XYXRjaFwiPlRvIFdhdGNoPC9idXR0b24+IDxidXR0b24gaWQ9XCJ3YXRjaGVkXCIgb25DbGljaz17cHJvcHMudG9nZ2xlV2F0Y2hlZH0gPldhdGNoZWQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG53aW5kb3cuV2F0Y2hUb2dnbGUgPSBXYXRjaFRvZ2dsZSJdfQ==