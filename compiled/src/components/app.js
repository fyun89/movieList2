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
			if (current[e].toggle) {
				current[e].toggle = false;
			} else {
				current[e].toggle = true;
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsImUiLCJjdXJyZW50Iiwid2F0Y2hlZCIsImZvckVhY2giLCJlbGVtIiwidG9nZ2xlIiwicHVzaCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImFkZGl0aW9uIiwiY29uY2F0IiwidGl0bGUiLCJyZXN1bHQiLCJoYW5kbGVBZGRUb0xpc3QiLCJiaW5kIiwiaGFuZGxlRm91bmQiLCJoYW5kbGVGaWx0ZXJXYXRjaGVkIiwiaGFuZGxlVG9nZ2xlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUwsZ0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUUEsTUFESTtBQUVaQyxhQUFVO0FBRkUsR0FBYjtBQUZhO0FBTWI7Ozs7c0NBRW1CQyxDLEVBQUc7QUFBQTs7QUFDdEIsT0FBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdDLE1BQXpCO0FBQ0EsT0FBSUksVUFBVSxFQUFkO0FBQ0FELFdBQVFFLE9BQVIsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFjO0FBQzdCLFFBQUlBLEtBQUtDLE1BQVQsRUFBZ0I7QUFDZkgsYUFBUUksSUFBUixDQUFhRixJQUFiO0FBQ0E7QUFDRCxJQUpEO0FBS0EsUUFBS0csUUFBTCxDQUFjLEVBQUNSLFVBQVVHLE9BQVgsRUFBZCxFQUFtQyxZQUFJO0FBQUNNLFlBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLE9BQUtaLEtBQTdCO0FBQW9DLElBQTVFO0FBQ0E7OzsrQkFFWUcsQyxFQUFHO0FBQ2YsT0FBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdDLE1BQXpCO0FBQ0EsT0FBSUcsUUFBUUQsQ0FBUixFQUFXSyxNQUFmLEVBQXVCO0FBQ3RCSixZQUFRRCxDQUFSLEVBQVdLLE1BQVgsR0FBb0IsS0FBcEI7QUFDQSxJQUZELE1BRU87QUFDTkosWUFBUUQsQ0FBUixFQUFXSyxNQUFYLEdBQW9CLElBQXBCO0FBQ0E7QUFDRCxRQUFLRSxRQUFMLENBQWMsRUFBQ1QsUUFBUUcsT0FBVCxFQUFkO0FBQ0E7OztrQ0FFZVMsUSxFQUFVO0FBQ3pCLE9BQUlULFVBQVUsS0FBS0osS0FBTCxDQUFXQyxNQUF6QjtBQUNBVSxXQUFRQyxHQUFSLENBQVlDLFFBQVo7QUFDQSxRQUFLSCxRQUFMLENBQWMsRUFBQ1QsUUFBUUcsUUFBUVUsTUFBUixDQUFlLENBQUMsRUFBQ0MsT0FBTUYsUUFBUCxFQUFpQkwsUUFBTyxLQUF4QixFQUFELENBQWYsQ0FBVCxFQUFkO0FBQ0E7Ozs4QkFFWVEsTSxFQUFRO0FBQ3BCLFFBQUtOLFFBQUwsQ0FBYyxFQUFDVCxRQUFRZSxNQUFULEVBQWQ7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLaEIsS0FBTCxDQUFXQyxNQUE5QixFQUFzQyxVQUFVLEtBQUtnQixlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFoRCxHQUREO0FBRUMsd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS2xCLEtBQUwsQ0FBV0MsTUFBM0IsRUFBbUMsT0FBTyxLQUFLa0IsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUMsR0FGRDtBQUdDLHdCQUFDLFdBQUQsSUFBYSxlQUFlLEtBQUtFLG1CQUFMLENBQXlCRixJQUF6QixDQUE4QixJQUE5QixDQUE1QixHQUhEO0FBSUMsd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2xCLEtBQXhCLEVBQStCLFNBQVMsS0FBS3FCLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCLElBQXZCLENBQXhDO0FBSkQsSUFERDtBQVFBOzs7O0VBbERnQkksTUFBTUMsUzs7QUFxRHhCQyxPQUFPekIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IG1vdmllcyxcblx0XHRcdGZpbHRlcmVkOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUZpbHRlcldhdGNoZWQoZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHR2YXIgd2F0Y2hlZCA9IFtdXG5cdFx0Y3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0aWYgKGVsZW0udG9nZ2xlKXtcblx0XHRcdFx0d2F0Y2hlZC5wdXNoKGVsZW0pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnNldFN0YXRlKHtmaWx0ZXJlZDogd2F0Y2hlZH0sICgpPT57Y29uc29sZS5sb2coJ2ZpbHRlcmVkJywgdGhpcy5zdGF0ZSl9KVxuXHR9XG5cblx0aGFuZGxlVG9nZ2xlKGUpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUubW92aWVzXG5cdFx0aWYgKGN1cnJlbnRbZV0udG9nZ2xlKSB7XG5cdFx0XHRjdXJyZW50W2VdLnRvZ2dsZSA9IGZhbHNlXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRbZV0udG9nZ2xlID0gdHJ1ZVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnR9KVxuXHR9XG5cblx0aGFuZGxlQWRkVG9MaXN0KGFkZGl0aW9uKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdGNvbnNvbGUubG9nKGFkZGl0aW9uKVxuXHRcdHRoaXMuc2V0U3RhdGUoe21vdmllczogY3VycmVudC5jb25jYXQoW3t0aXRsZTphZGRpdGlvbiwgdG9nZ2xlOmZhbHNlfV0pfSlcblx0fVxuXG5cdGhhbmRsZUZvdW5kIChyZXN1bHQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxBZGRUb0xpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gYWRkaXRpb249e3RoaXMuaGFuZGxlQWRkVG9MaXN0LmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gZm91bmQ9e3RoaXMuaGFuZGxlRm91bmQuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFdhdGNoVG9nZ2xlIHRvZ2dsZVdhdGNoZWQ9e3RoaXMuaGFuZGxlRmlsdGVyV2F0Y2hlZC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8VmlkZW9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZX0gdG9nZ2xlZD17dGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BcHAgPSBBcHAiXX0=