"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WatchToggle = function (_React$Component) {
	_inherits(WatchToggle, _React$Component);

	//upper level is App
	function WatchToggle(props) {
		_classCallCheck(this, WatchToggle);

		var _this = _possibleConstructorReturn(this, (WatchToggle.__proto__ || Object.getPrototypeOf(WatchToggle)).call(this, props));

		_this.state = { button: false };
		return _this;
	}

	_createClass(WatchToggle, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "watchToggle" },
				React.createElement(
					"button",
					{ id: "toWatch", onClick: this.props.toggleToWatch },
					"To Watch"
				),
				React.createElement(
					"button",
					{ id: "watched", onClick: this.props.toggleWatched },
					"Watched"
				),
				React.createElement(
					"button",
					{ id: "refresh", onClick: this.props.toggleRefresh },
					"Show All"
				)
			);
		}
	}]);

	return WatchToggle;
}(React.Component);

window.WatchToggle = WatchToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dhdGNoVG9nZ2xlLmpzeCJdLCJuYW1lcyI6WyJXYXRjaFRvZ2dsZSIsInByb3BzIiwic3RhdGUiLCJidXR0b24iLCJ0b2dnbGVUb1dhdGNoIiwidG9nZ2xlV2F0Y2hlZCIsInRvZ2dsZVJlZnJlc2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxXOzs7QUFBcUM7QUFDMUMsc0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsUUFBS0MsS0FBTCxHQUFhLEVBQUNDLFFBQVEsS0FBVCxFQUFiO0FBRmlCO0FBR2pCOzs7OzJCQUVPO0FBQ1AsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLGFBQVI7QUFDRTtBQUFBO0FBQUEsT0FBUSxJQUFHLFNBQVgsRUFBcUIsU0FBUyxLQUFLRixLQUFMLENBQVdHLGFBQXpDO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLE9BQVEsSUFBRyxTQUFYLEVBQXFCLFNBQVMsS0FBS0gsS0FBTCxDQUFXSSxhQUF6QztBQUFBO0FBQUEsS0FGRjtBQUdFO0FBQUE7QUFBQSxPQUFRLElBQUcsU0FBWCxFQUFxQixTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssYUFBekM7QUFBQTtBQUFBO0FBSEYsSUFERDtBQU9BOzs7O0VBZHdCQyxNQUFNQyxTOztBQWtCaENDLE9BQU9ULFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IndhdGNoVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV2F0Y2hUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7IC8vdXBwZXIgbGV2ZWwgaXMgQXBwXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge2J1dHRvbjogZmFsc2V9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGlkPVwid2F0Y2hUb2dnbGVcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwidG9XYXRjaFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlVG9XYXRjaH0gPlRvIFdhdGNoPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cIndhdGNoZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZVdhdGNoZWR9ID5XYXRjaGVkPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cInJlZnJlc2hcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZVJlZnJlc2h9ID5TaG93IEFsbDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxud2luZG93LldhdGNoVG9nZ2xlID0gV2F0Y2hUb2dnbGUiXX0=