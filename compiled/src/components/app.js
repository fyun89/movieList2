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
		key: 'handleRefresh',
		value: function handleRefresh() {
			this.setState({ filtered: null });
		}
	}, {
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
			if (this.state.filtered) {
				this.setState({ filtered: result });
			} else {
				this.setState({ movies: result });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(AddToList, { movies: this.state.movies, addition: this.handleAddToList.bind(this) }),
				React.createElement(Search, { movies: this.state.filtered || this.state.movies, found: this.handleFound.bind(this) }),
				React.createElement(WatchToggle, { toggleWatched: this.handleFilterWatched.bind(this), toggleRefresh: this.handleRefresh.bind(this) }),
				React.createElement(VideoList, { movies: this.state, toggled: this.handleToggle.bind(this) })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsInNldFN0YXRlIiwiZSIsImN1cnJlbnQiLCJ3YXRjaGVkIiwiZm9yRWFjaCIsImVsZW0iLCJ0b2dnbGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiYWRkaXRpb24iLCJjb25jYXQiLCJyZXN1bHQiLCJoYW5kbGVBZGRUb0xpc3QiLCJiaW5kIiwiaGFuZGxlRm91bmQiLCJoYW5kbGVGaWx0ZXJXYXRjaGVkIiwiaGFuZGxlUmVmcmVzaCIsImhhbmRsZVRvZ2dsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVMLGdCQUFjO0FBQUE7O0FBQUE7O0FBRWIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVFBLE1BREk7QUFFWkMsYUFBVTtBQUZFLEdBQWI7QUFGYTtBQU1iOzs7O2tDQUVlO0FBQ2YsUUFBS0MsUUFBTCxDQUFjLEVBQUNELFVBQVUsSUFBWCxFQUFkO0FBQ0E7OztzQ0FFbUJFLEMsRUFBRztBQUFBOztBQUN0QixPQUFJQyxVQUFVLEtBQUtMLEtBQUwsQ0FBV0MsTUFBekI7QUFDQSxPQUFJSyxVQUFVLEVBQWQ7QUFDQUQsV0FBUUUsT0FBUixDQUFnQixVQUFTQyxJQUFULEVBQWM7QUFDN0IsUUFBSUEsS0FBS0MsTUFBVCxFQUFnQjtBQUNmSCxhQUFRSSxJQUFSLENBQWFGLElBQWI7QUFDQTtBQUNELElBSkQ7QUFLQSxRQUFLTCxRQUFMLENBQWMsRUFBQ0QsVUFBVUksT0FBWCxFQUFkLEVBQW1DLFlBQUk7QUFBQ0ssWUFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0IsT0FBS1osS0FBN0I7QUFBb0MsSUFBNUU7QUFDQTs7OytCQUVZSSxDLEVBQUc7QUFDZixPQUFJQyxVQUFVLEtBQUtMLEtBQUwsQ0FBV0MsTUFBekI7QUFDQVUsV0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JSLENBQXRCO0FBQ0FDLFdBQVFFLE9BQVIsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFjO0FBQzdCLFFBQUlBLEtBQUtLLEtBQUwsS0FBZVQsQ0FBbkIsRUFBcUI7QUFDcEIsU0FBSUksS0FBS0MsTUFBVCxFQUFnQjtBQUNmRCxXQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLE1BRkQsTUFFSztBQUNKRCxXQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBO0FBQ0Q7QUFDRCxJQVJEO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUtOLFFBQUwsQ0FBYyxFQUFDRixRQUFRSSxPQUFULEVBQWQ7QUFDQTs7O2tDQUVlUyxRLEVBQVU7QUFDekIsT0FBSVQsVUFBVSxLQUFLTCxLQUFMLENBQVdDLE1BQXpCO0FBQ0FVLFdBQVFDLEdBQVIsQ0FBWUUsUUFBWjtBQUNBLFFBQUtYLFFBQUwsQ0FBYyxFQUFDRixRQUFRSSxRQUFRVSxNQUFSLENBQWUsQ0FBQyxFQUFDRixPQUFNQyxRQUFQLEVBQWlCTCxRQUFPLEtBQXhCLEVBQUQsQ0FBZixDQUFULEVBQWQ7QUFDQTs7OzhCQUVZTyxNLEVBQVE7QUFDcEIsT0FBSSxLQUFLaEIsS0FBTCxDQUFXRSxRQUFmLEVBQXlCO0FBQ3hCLFNBQUtDLFFBQUwsQ0FBYyxFQUFDRCxVQUFVYyxNQUFYLEVBQWQ7QUFDQSxJQUZELE1BRUs7QUFDSixTQUFLYixRQUFMLENBQWMsRUFBQ0YsUUFBUWUsTUFBVCxFQUFkO0FBQ0E7QUFDRDs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLaEIsS0FBTCxDQUFXQyxNQUE5QixFQUFzQyxVQUFVLEtBQUtnQixlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFoRCxHQUREO0FBRUMsd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS2xCLEtBQUwsQ0FBV0UsUUFBWCxJQUFxQixLQUFLRixLQUFMLENBQVdDLE1BQWhELEVBQXdELE9BQU8sS0FBS2tCLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQS9ELEdBRkQ7QUFHQyx3QkFBQyxXQUFELElBQWEsZUFBZSxLQUFLRSxtQkFBTCxDQUF5QkYsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBNUIsRUFBaUUsZUFBZSxLQUFLRyxhQUFMLENBQW1CSCxJQUFuQixDQUF3QixJQUF4QixDQUFoRixHQUhEO0FBSUMsd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2xCLEtBQXhCLEVBQStCLFNBQVMsS0FBS3NCLFlBQUwsQ0FBa0JKLElBQWxCLENBQXVCLElBQXZCLENBQXhDO0FBSkQsSUFERDtBQVFBOzs7O0VBcEVnQkssTUFBTUMsUzs7QUF1RXhCQyxPQUFPMUIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IG1vdmllcyxcblx0XHRcdGZpbHRlcmVkOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZVJlZnJlc2goKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWQ6IG51bGx9KVxuXHR9XG5cblx0aGFuZGxlRmlsdGVyV2F0Y2hlZChlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdHZhciB3YXRjaGVkID0gW11cblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS50b2dnbGUpe1xuXHRcdFx0XHR3YXRjaGVkLnB1c2goZWxlbSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkOiB3YXRjaGVkfSwgKCk9Pntjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLnN0YXRlKX0pXG5cdH1cblxuXHRoYW5kbGVUb2dnbGUoZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHRjb25zb2xlLmxvZygnZSBpczogJywgZSlcblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS50aXRsZSA9PT0gZSl7XG5cdFx0XHRcdGlmIChlbGVtLnRvZ2dsZSl7XG5cdFx0XHRcdFx0ZWxlbS50b2dnbGUgPSBmYWxzZVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRlbGVtLnRvZ2dsZSA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Ly8gaWYgKGN1cnJlbnRbZV0udG9nZ2xlKSB7XG5cdFx0Ly8gXHRjdXJyZW50W2VdLnRvZ2dsZSA9IGZhbHNlXG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdGN1cnJlbnRbZV0udG9nZ2xlID0gdHJ1ZVxuXHRcdC8vIH1cblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnR9KVxuXHR9XG5cblx0aGFuZGxlQWRkVG9MaXN0KGFkZGl0aW9uKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdGNvbnNvbGUubG9nKGFkZGl0aW9uKVxuXHRcdHRoaXMuc2V0U3RhdGUoe21vdmllczogY3VycmVudC5jb25jYXQoW3t0aXRsZTphZGRpdGlvbiwgdG9nZ2xlOmZhbHNlfV0pfSlcblx0fVxuXG5cdGhhbmRsZUZvdW5kIChyZXN1bHQpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5maWx0ZXJlZCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWQ6IHJlc3VsdH0pXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QWRkVG9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGFkZGl0aW9uPXt0aGlzLmhhbmRsZUFkZFRvTGlzdC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5maWx0ZXJlZHx8dGhpcy5zdGF0ZS5tb3ZpZXN9IGZvdW5kPXt0aGlzLmhhbmRsZUZvdW5kLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxXYXRjaFRvZ2dsZSB0b2dnbGVXYXRjaGVkPXt0aGlzLmhhbmRsZUZpbHRlcldhdGNoZWQuYmluZCh0aGlzKX0gdG9nZ2xlUmVmcmVzaD17dGhpcy5oYW5kbGVSZWZyZXNoLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxWaWRlb0xpc3QgbW92aWVzPXt0aGlzLnN0YXRlfSB0b2dnbGVkPXt0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LkFwcCA9IEFwcCJdfQ==