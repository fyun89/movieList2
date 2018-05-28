"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = { movies: movies };
		return _this;
	}

	_createClass(App, [{
		key: "handleFound",
		value: function handleFound(result) {
			this.setState({ movies: result });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("addToList", null),
				React.createElement(Search, { movies: this.state.movies, found: this.handleFound.bind(this) }),
				React.createElement(VideoList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImhhbmRsZUZvdW5kIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVMLGdCQUFjO0FBQUE7O0FBQUE7O0FBRWIsUUFBS0MsS0FBTCxHQUFhLEVBQUNDLFFBQVFBLE1BQVQsRUFBYjtBQUZhO0FBR2I7Ozs7OEJBRVlDLE0sRUFBUTtBQUNwQixRQUFLQyxRQUFMLENBQWMsRUFBQ0YsUUFBUUMsTUFBVCxFQUFkO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0MsMENBREQ7QUFFQyx3QkFBQyxNQUFELElBQVEsUUFBUSxLQUFLRixLQUFMLENBQVdDLE1BQTNCLEVBQW1DLE9BQU8sS0FBS0csV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUMsR0FGRDtBQUdDLHdCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtMLEtBQUwsQ0FBV0MsTUFBOUI7QUFIRCxJQUREO0FBT0E7Ozs7RUFuQmdCSyxNQUFNQyxTOztBQXNCeEJDLE9BQU9ULEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0YXRlID0ge21vdmllczogbW92aWVzfTtcblx0fVxuXG5cdGhhbmRsZUZvdW5kIChyZXN1bHQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxhZGRUb0xpc3QgLz5cblx0XHRcdFx0PFNlYXJjaCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBmb3VuZD17dGhpcy5oYW5kbGVGb3VuZC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8VmlkZW9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuQXBwID0gQXBwIl19