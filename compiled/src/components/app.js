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

		_this.state = {
			movies: movies,
			filtered: null
		};
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
				React.createElement(AddToList, null),
				React.createElement(Search, { movies: this.state.movies, filtered: this.state.filtered, found: this.handleFound.bind(this) }),
				React.createElement(VideoList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsInJlc3VsdCIsInNldFN0YXRlIiwiaGFuZGxlRm91bmQiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUwsZ0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUUEsTUFESTtBQUVaQyxhQUFVO0FBRkUsR0FBYjtBQUZhO0FBTWI7Ozs7OEJBRVlDLE0sRUFBUTtBQUNwQixRQUFLQyxRQUFMLENBQWMsRUFBQ0gsUUFBUUUsTUFBVCxFQUFkO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msd0JBQUMsU0FBRCxPQUREO0FBRUMsd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS0gsS0FBTCxDQUFXQyxNQUEzQixFQUFtQyxVQUFVLEtBQUtELEtBQUwsQ0FBV0UsUUFBeEQsRUFBa0UsT0FBTyxLQUFLRyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF6RSxHQUZEO0FBR0Msd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS04sS0FBTCxDQUFXQyxNQUE5QjtBQUhELElBREQ7QUFPQTs7OztFQXRCZ0JNLE1BQU1DLFM7O0FBeUJ4QkMsT0FBT1YsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IG1vdmllcyxcblx0XHRcdGZpbHRlcmVkOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUZvdW5kIChyZXN1bHQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxBZGRUb0xpc3QgLz5cblx0XHRcdFx0PFNlYXJjaCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBmaWx0ZXJlZD17dGhpcy5zdGF0ZS5maWx0ZXJlZH0gZm91bmQ9e3RoaXMuaGFuZGxlRm91bmQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFZpZGVvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LkFwcCA9IEFwcCJdfQ==