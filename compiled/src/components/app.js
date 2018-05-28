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
				React.createElement(WatchToggle, { toggleWatched: this.handleFilterWatched.bind(this) }),
				React.createElement(VideoList, { movies: this.state, toggled: this.handleToggle.bind(this) })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsImUiLCJjdXJyZW50Iiwid2F0Y2hlZCIsImZvckVhY2giLCJlbGVtIiwidG9nZ2xlIiwicHVzaCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiYWRkaXRpb24iLCJjb25jYXQiLCJyZXN1bHQiLCJoYW5kbGVBZGRUb0xpc3QiLCJiaW5kIiwiaGFuZGxlRm91bmQiLCJoYW5kbGVGaWx0ZXJXYXRjaGVkIiwiaGFuZGxlVG9nZ2xlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUwsZ0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUUEsTUFESTtBQUVaQyxhQUFVO0FBRkUsR0FBYjtBQUZhO0FBTWI7Ozs7c0NBRW1CQyxDLEVBQUc7QUFBQTs7QUFDdEIsT0FBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdDLE1BQXpCO0FBQ0EsT0FBSUksVUFBVSxFQUFkO0FBQ0FELFdBQVFFLE9BQVIsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFjO0FBQzdCLFFBQUlBLEtBQUtDLE1BQVQsRUFBZ0I7QUFDZkgsYUFBUUksSUFBUixDQUFhRixJQUFiO0FBQ0E7QUFDRCxJQUpEO0FBS0EsUUFBS0csUUFBTCxDQUFjLEVBQUNSLFVBQVVHLE9BQVgsRUFBZCxFQUFtQyxZQUFJO0FBQUNNLFlBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLE9BQUtaLEtBQTdCO0FBQW9DLElBQTVFO0FBQ0E7OzsrQkFFWUcsQyxFQUFHO0FBQ2YsT0FBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdDLE1BQXpCO0FBQ0FVLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCVCxDQUF0QjtBQUNBQyxXQUFRRSxPQUFSLENBQWdCLFVBQVNDLElBQVQsRUFBYztBQUM3QixRQUFJQSxLQUFLTSxLQUFMLEtBQWVWLENBQW5CLEVBQXFCO0FBQ3BCLFNBQUlJLEtBQUtDLE1BQVQsRUFBZ0I7QUFDZkQsV0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxNQUZELE1BRUs7QUFDSkQsV0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQTtBQUNEO0FBQ0QsSUFSRDtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFLRSxRQUFMLENBQWMsRUFBQ1QsUUFBUUcsT0FBVCxFQUFkO0FBQ0E7OztrQ0FFZVUsUSxFQUFVO0FBQ3pCLE9BQUlWLFVBQVUsS0FBS0osS0FBTCxDQUFXQyxNQUF6QjtBQUNBVSxXQUFRQyxHQUFSLENBQVlFLFFBQVo7QUFDQSxRQUFLSixRQUFMLENBQWMsRUFBQ1QsUUFBUUcsUUFBUVcsTUFBUixDQUFlLENBQUMsRUFBQ0YsT0FBTUMsUUFBUCxFQUFpQk4sUUFBTyxLQUF4QixFQUFELENBQWYsQ0FBVCxFQUFkO0FBQ0E7Ozs4QkFFWVEsTSxFQUFRO0FBQ3BCLE9BQUksS0FBS2hCLEtBQUwsQ0FBV0UsUUFBZixFQUF5QjtBQUN4QixTQUFLUSxRQUFMLENBQWMsRUFBQ1IsVUFBVWMsTUFBWCxFQUFkO0FBQ0EsSUFGRCxNQUVLO0FBQ0osU0FBS04sUUFBTCxDQUFjLEVBQUNULFFBQVFlLE1BQVQsRUFBZDtBQUNBO0FBQ0Q7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0MsVUFBVSxLQUFLZ0IsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBaEQsR0FERDtBQUVDLHdCQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtsQixLQUFMLENBQVdFLFFBQVgsSUFBcUIsS0FBS0YsS0FBTCxDQUFXQyxNQUFoRCxFQUF3RCxPQUFPLEtBQUtrQixXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUEvRCxHQUZEO0FBR0Msd0JBQUMsV0FBRCxJQUFhLGVBQWUsS0FBS0UsbUJBQUwsQ0FBeUJGLElBQXpCLENBQThCLElBQTlCLENBQTVCLEdBSEQ7QUFJQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLbEIsS0FBeEIsRUFBK0IsU0FBUyxLQUFLcUIsWUFBTCxDQUFrQkgsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBeEM7QUFKRCxJQUREO0FBUUE7Ozs7RUFoRWdCSSxNQUFNQyxTOztBQW1FeEJDLE9BQU96QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogbW92aWVzLFxuXHRcdFx0ZmlsdGVyZWQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0aGFuZGxlRmlsdGVyV2F0Y2hlZChlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdHZhciB3YXRjaGVkID0gW11cblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS50b2dnbGUpe1xuXHRcdFx0XHR3YXRjaGVkLnB1c2goZWxlbSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkOiB3YXRjaGVkfSwgKCk9Pntjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLnN0YXRlKX0pXG5cdH1cblxuXHRoYW5kbGVUb2dnbGUoZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHRjb25zb2xlLmxvZygnZSBpczogJywgZSlcblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS50aXRsZSA9PT0gZSl7XG5cdFx0XHRcdGlmIChlbGVtLnRvZ2dsZSl7XG5cdFx0XHRcdFx0ZWxlbS50b2dnbGUgPSBmYWxzZVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRlbGVtLnRvZ2dsZSA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Ly8gaWYgKGN1cnJlbnRbZV0udG9nZ2xlKSB7XG5cdFx0Ly8gXHRjdXJyZW50W2VdLnRvZ2dsZSA9IGZhbHNlXG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdGN1cnJlbnRbZV0udG9nZ2xlID0gdHJ1ZVxuXHRcdC8vIH1cblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnR9KVxuXHR9XG5cblx0aGFuZGxlQWRkVG9MaXN0KGFkZGl0aW9uKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdGNvbnNvbGUubG9nKGFkZGl0aW9uKVxuXHRcdHRoaXMuc2V0U3RhdGUoe21vdmllczogY3VycmVudC5jb25jYXQoW3t0aXRsZTphZGRpdGlvbiwgdG9nZ2xlOmZhbHNlfV0pfSlcblx0fVxuXG5cdGhhbmRsZUZvdW5kIChyZXN1bHQpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5maWx0ZXJlZCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWQ6IHJlc3VsdH0pXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QWRkVG9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGFkZGl0aW9uPXt0aGlzLmhhbmRsZUFkZFRvTGlzdC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5maWx0ZXJlZHx8dGhpcy5zdGF0ZS5tb3ZpZXN9IGZvdW5kPXt0aGlzLmhhbmRsZUZvdW5kLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxXYXRjaFRvZ2dsZSB0b2dnbGVXYXRjaGVkPXt0aGlzLmhhbmRsZUZpbHRlcldhdGNoZWQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFZpZGVvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGV9IHRvZ2dsZWQ9e3RoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuQXBwID0gQXBwIl19