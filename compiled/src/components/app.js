'use strict';

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
		key: 'handleFilterWatched',
		value: function handleFilterWatched(e) {
			var _this2 = this;

			var current = this.state.movies;
			var watched = [];
			current.forEach(function (elem) {
				if (elem.toggle) {
					watched.push(elem);
				}
			});
			this.setState({ filtered: watched }, function () {
				console.log('filtered', _this2.state);
			});
		}
	}, {
		key: 'handleToggle',
		value: function handleToggle(e) {
			var current = this.state.movies;
			console.log('e is: ', e);
			current.forEach(function (elem) {
				if (elem.title === e) {
					if (elem.toggle) {
						elem.toggle = false;
					} else {
						elem.toggle = true;
					}
				}
			});
			// if (current[e].toggle) {
			// 	current[e].toggle = false
			// } else {
			// 	current[e].toggle = true
			// }
			this.setState({ movies: current });
		}
	}, {
		key: 'handleAddToList',
		value: function handleAddToList(addition) {
			var current = this.state.movies;
			console.log(addition);
			this.setState({ movies: current.concat([{ title: addition, toggle: false }]) });
		}
	}, {
		key: 'handleFound',
		value: function handleFound(result) {
			this.setState({ movies: result });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(AddToList, { movies: this.state.movies, addition: this.handleAddToList.bind(this) }),
				React.createElement(Search, { movies: this.state.movies, found: this.handleFound.bind(this) }),
				React.createElement(WatchToggle, { toggleWatched: this.handleFilterWatched.bind(this) }),
				React.createElement(VideoList, { movies: this.state, toggled: this.handleToggle.bind(this) })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsImUiLCJjdXJyZW50Iiwid2F0Y2hlZCIsImZvckVhY2giLCJlbGVtIiwidG9nZ2xlIiwicHVzaCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiYWRkaXRpb24iLCJjb25jYXQiLCJyZXN1bHQiLCJoYW5kbGVBZGRUb0xpc3QiLCJiaW5kIiwiaGFuZGxlRm91bmQiLCJoYW5kbGVGaWx0ZXJXYXRjaGVkIiwiaGFuZGxlVG9nZ2xlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUwsZ0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUUEsTUFESTtBQUVaQyxhQUFVO0FBRkUsR0FBYjtBQUZhO0FBTWI7Ozs7c0NBRW1CQyxDLEVBQUc7QUFBQTs7QUFDdEIsT0FBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdDLE1BQXpCO0FBQ0EsT0FBSUksVUFBVSxFQUFkO0FBQ0FELFdBQVFFLE9BQVIsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFjO0FBQzdCLFFBQUlBLEtBQUtDLE1BQVQsRUFBZ0I7QUFDZkgsYUFBUUksSUFBUixDQUFhRixJQUFiO0FBQ0E7QUFDRCxJQUpEO0FBS0EsUUFBS0csUUFBTCxDQUFjLEVBQUNSLFVBQVVHLE9BQVgsRUFBZCxFQUFtQyxZQUFJO0FBQUNNLFlBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLE9BQUtaLEtBQTdCO0FBQW9DLElBQTVFO0FBQ0E7OzsrQkFFWUcsQyxFQUFHO0FBQ2YsT0FBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdDLE1BQXpCO0FBQ0FVLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCVCxDQUF0QjtBQUNBQyxXQUFRRSxPQUFSLENBQWdCLFVBQVNDLElBQVQsRUFBYztBQUM3QixRQUFJQSxLQUFLTSxLQUFMLEtBQWVWLENBQW5CLEVBQXFCO0FBQ3BCLFNBQUlJLEtBQUtDLE1BQVQsRUFBZ0I7QUFDZkQsV0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxNQUZELE1BRUs7QUFDSkQsV0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQTtBQUNEO0FBQ0QsSUFSRDtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFLRSxRQUFMLENBQWMsRUFBQ1QsUUFBUUcsT0FBVCxFQUFkO0FBQ0E7OztrQ0FFZVUsUSxFQUFVO0FBQ3pCLE9BQUlWLFVBQVUsS0FBS0osS0FBTCxDQUFXQyxNQUF6QjtBQUNBVSxXQUFRQyxHQUFSLENBQVlFLFFBQVo7QUFDQSxRQUFLSixRQUFMLENBQWMsRUFBQ1QsUUFBUUcsUUFBUVcsTUFBUixDQUFlLENBQUMsRUFBQ0YsT0FBTUMsUUFBUCxFQUFpQk4sUUFBTyxLQUF4QixFQUFELENBQWYsQ0FBVCxFQUFkO0FBQ0E7Ozs4QkFFWVEsTSxFQUFRO0FBQ3BCLFFBQUtOLFFBQUwsQ0FBYyxFQUFDVCxRQUFRZSxNQUFULEVBQWQ7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLaEIsS0FBTCxDQUFXQyxNQUE5QixFQUFzQyxVQUFVLEtBQUtnQixlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFoRCxHQUREO0FBRUMsd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS2xCLEtBQUwsQ0FBV0MsTUFBM0IsRUFBbUMsT0FBTyxLQUFLa0IsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUMsR0FGRDtBQUdDLHdCQUFDLFdBQUQsSUFBYSxlQUFlLEtBQUtFLG1CQUFMLENBQXlCRixJQUF6QixDQUE4QixJQUE5QixDQUE1QixHQUhEO0FBSUMsd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2xCLEtBQXhCLEVBQStCLFNBQVMsS0FBS3FCLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCLElBQXZCLENBQXhDO0FBSkQsSUFERDtBQVFBOzs7O0VBNURnQkksTUFBTUMsUzs7QUErRHhCQyxPQUFPekIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IG1vdmllcyxcblx0XHRcdGZpbHRlcmVkOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUZpbHRlcldhdGNoZWQoZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHR2YXIgd2F0Y2hlZCA9IFtdXG5cdFx0Y3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0aWYgKGVsZW0udG9nZ2xlKXtcblx0XHRcdFx0d2F0Y2hlZC5wdXNoKGVsZW0pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnNldFN0YXRlKHtmaWx0ZXJlZDogd2F0Y2hlZH0sICgpPT57Y29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5zdGF0ZSl9KVxuXHR9XG5cblx0aGFuZGxlVG9nZ2xlKGUpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUubW92aWVzXG5cdFx0Y29uc29sZS5sb2coJ2UgaXM6ICcsIGUpXG5cdFx0Y3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0aWYgKGVsZW0udGl0bGUgPT09IGUpe1xuXHRcdFx0XHRpZiAoZWxlbS50b2dnbGUpe1xuXHRcdFx0XHRcdGVsZW0udG9nZ2xlID0gZmFsc2Vcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0ZWxlbS50b2dnbGUgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdC8vIGlmIChjdXJyZW50W2VdLnRvZ2dsZSkge1xuXHRcdC8vIFx0Y3VycmVudFtlXS50b2dnbGUgPSBmYWxzZVxuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHRjdXJyZW50W2VdLnRvZ2dsZSA9IHRydWVcblx0XHQvLyB9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBjdXJyZW50fSlcblx0fVxuXG5cdGhhbmRsZUFkZFRvTGlzdChhZGRpdGlvbikge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHRjb25zb2xlLmxvZyhhZGRpdGlvbilcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnQuY29uY2F0KFt7dGl0bGU6YWRkaXRpb24sIHRvZ2dsZTpmYWxzZX1dKX0pXG5cdH1cblxuXHRoYW5kbGVGb3VuZCAocmVzdWx0KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVzOiByZXN1bHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QWRkVG9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGFkZGl0aW9uPXt0aGlzLmhhbmRsZUFkZFRvTGlzdC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGZvdW5kPXt0aGlzLmhhbmRsZUZvdW5kLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxXYXRjaFRvZ2dsZSB0b2dnbGVXYXRjaGVkPXt0aGlzLmhhbmRsZUZpbHRlcldhdGNoZWQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFZpZGVvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGV9IHRvZ2dsZWQ9e3RoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuQXBwID0gQXBwIl19