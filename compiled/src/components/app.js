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
			movies: movies
		};
		return _this;
	}

	_createClass(App, [{
		key: "handleAddToList",
		value: function handleAddToList(addition) {
			var current = this.state.movies;
			console.log(addition);
			this.setState({ movies: current.concat([{ title: addition }]) });
		}
	}, {
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
				React.createElement(AddToList, { movies: this.state.movies, addition: this.handleAddToList.bind(this) }),
				React.createElement(Search, { movies: this.state.movies, found: this.handleFound.bind(this) }),
				React.createElement(WatchToggle, null),
				React.createElement(VideoList, { movies: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJhZGRpdGlvbiIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjb25jYXQiLCJ0aXRsZSIsInJlc3VsdCIsImhhbmRsZUFkZFRvTGlzdCIsImJpbmQiLCJoYW5kbGVGb3VuZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVMLGdCQUFjO0FBQUE7O0FBQUE7O0FBRWIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVFBO0FBREksR0FBYjtBQUZhO0FBS2I7Ozs7a0NBRWVDLFEsRUFBVTtBQUN6QixPQUFJQyxVQUFVLEtBQUtILEtBQUwsQ0FBV0MsTUFBekI7QUFDQUcsV0FBUUMsR0FBUixDQUFZSCxRQUFaO0FBQ0EsUUFBS0ksUUFBTCxDQUFjLEVBQUNMLFFBQVFFLFFBQVFJLE1BQVIsQ0FBZSxDQUFDLEVBQUNDLE9BQU1OLFFBQVAsRUFBRCxDQUFmLENBQVQsRUFBZDtBQUNBOzs7OEJBRVlPLE0sRUFBUTtBQUNwQixRQUFLSCxRQUFMLENBQWMsRUFBQ0wsUUFBUVEsTUFBVCxFQUFkO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS1QsS0FBTCxDQUFXQyxNQUE5QixFQUFzQyxVQUFVLEtBQUtTLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQWhELEdBREQ7QUFFQyx3QkFBQyxNQUFELElBQVEsUUFBUSxLQUFLWCxLQUFMLENBQVdDLE1BQTNCLEVBQW1DLE9BQU8sS0FBS1csV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUMsR0FGRDtBQUdDLHdCQUFDLFdBQUQsT0FIRDtBQUlDLHdCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtYLEtBQUwsQ0FBV0MsTUFBOUI7QUFKRCxJQUREO0FBUUE7Ozs7RUE1QmdCWSxNQUFNQyxTOztBQStCeEJDLE9BQU9oQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogbW92aWVzXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUFkZFRvTGlzdChhZGRpdGlvbikge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHRjb25zb2xlLmxvZyhhZGRpdGlvbilcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnQuY29uY2F0KFt7dGl0bGU6YWRkaXRpb259XSl9KVxuXHR9XG5cblx0aGFuZGxlRm91bmQgKHJlc3VsdCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe21vdmllczogcmVzdWx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEFkZFRvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBhZGRpdGlvbj17dGhpcy5oYW5kbGVBZGRUb0xpc3QuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFNlYXJjaCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBmb3VuZD17dGhpcy5oYW5kbGVGb3VuZC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8V2F0Y2hUb2dnbGUgLz5cblx0XHRcdFx0PFZpZGVvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BcHAgPSBBcHAiXX0=