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
		key: 'handleToWatch',
		value: function handleToWatch() {
			var current = this.state.movies;
			var toWatch = [];
			current.forEach(function (elem) {
				if (!elem.toggle) {
					toWatch.push(elem);
				}
			});
			this.setState({ filtered: toWatch });
		}
	}, {
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
			this.setState({ movies: current });
		}
	}, {
		key: 'handleAddToList',
		value: function handleAddToList(addition) {
			//known bug: duplicate movies can be added
			var current = this.state.movies;
			console.log(addition);
			this.setState({ movies: current.concat([{ title: addition, toggle: false }]) });
		}
	}, {
		key: 'handleFound',
		value: function handleFound(result) {
			//known bug: when searched movie, Show All doesn't work
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
				React.createElement(WatchToggle, { toggleToWatch: this.handleToWatch.bind(this), toggleWatched: this.handleFilterWatched.bind(this), toggleRefresh: this.handleRefresh.bind(this) }),
				React.createElement(VideoList, { movies: this.state, toggled: this.handleToggle.bind(this) })
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsImN1cnJlbnQiLCJ0b1dhdGNoIiwiZm9yRWFjaCIsImVsZW0iLCJ0b2dnbGUiLCJwdXNoIiwic2V0U3RhdGUiLCJlIiwid2F0Y2hlZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImFkZGl0aW9uIiwiY29uY2F0IiwicmVzdWx0IiwiaGFuZGxlQWRkVG9MaXN0IiwiYmluZCIsImhhbmRsZUZvdW5kIiwiaGFuZGxlVG9XYXRjaCIsImhhbmRsZUZpbHRlcldhdGNoZWQiLCJoYW5kbGVSZWZyZXNoIiwiaGFuZGxlVG9nZ2xlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUwsZ0JBQWM7QUFBQTs7QUFBQTs7QUFFYixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUUEsTUFESTtBQUVaQyxhQUFVO0FBRkUsR0FBYjtBQUZhO0FBTWI7Ozs7a0NBRWU7QUFDZixPQUFJQyxVQUFVLEtBQUtILEtBQUwsQ0FBV0MsTUFBekI7QUFDQSxPQUFJRyxVQUFVLEVBQWQ7QUFDQUQsV0FBUUUsT0FBUixDQUFnQixVQUFTQyxJQUFULEVBQWM7QUFDN0IsUUFBRyxDQUFDQSxLQUFLQyxNQUFULEVBQWdCO0FBQ2ZILGFBQVFJLElBQVIsQ0FBYUYsSUFBYjtBQUNBO0FBQ0QsSUFKRDtBQUtBLFFBQUtHLFFBQUwsQ0FBYyxFQUFDUCxVQUFTRSxPQUFWLEVBQWQ7QUFDQTs7O2tDQUVlO0FBQ2YsUUFBS0ssUUFBTCxDQUFjLEVBQUNQLFVBQVUsSUFBWCxFQUFkO0FBQ0E7OztzQ0FFbUJRLEMsRUFBRztBQUFBOztBQUN0QixPQUFJUCxVQUFVLEtBQUtILEtBQUwsQ0FBV0MsTUFBekI7QUFDQSxPQUFJVSxVQUFVLEVBQWQ7QUFDQVIsV0FBUUUsT0FBUixDQUFnQixVQUFTQyxJQUFULEVBQWM7QUFDN0IsUUFBSUEsS0FBS0MsTUFBVCxFQUFnQjtBQUNmSSxhQUFRSCxJQUFSLENBQWFGLElBQWI7QUFDQTtBQUNELElBSkQ7QUFLQSxRQUFLRyxRQUFMLENBQWMsRUFBQ1AsVUFBVVMsT0FBWCxFQUFkLEVBQW1DLFlBQUk7QUFBQ0MsWUFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0IsT0FBS2IsS0FBN0I7QUFBb0MsSUFBNUU7QUFDQTs7OytCQUVZVSxDLEVBQUc7QUFDZixPQUFJUCxVQUFVLEtBQUtILEtBQUwsQ0FBV0MsTUFBekI7QUFDQVcsV0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JILENBQXRCO0FBQ0FQLFdBQVFFLE9BQVIsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFjO0FBQzdCLFFBQUlBLEtBQUtRLEtBQUwsS0FBZUosQ0FBbkIsRUFBcUI7QUFDcEIsU0FBSUosS0FBS0MsTUFBVCxFQUFnQjtBQUNmRCxXQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLE1BRkQsTUFFSztBQUNKRCxXQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBO0FBQ0Q7QUFDRCxJQVJEO0FBU0EsUUFBS0UsUUFBTCxDQUFjLEVBQUNSLFFBQVFFLE9BQVQsRUFBZDtBQUNBOzs7a0NBRWVZLFEsRUFBVTtBQUFFO0FBQzNCLE9BQUlaLFVBQVUsS0FBS0gsS0FBTCxDQUFXQyxNQUF6QjtBQUNBVyxXQUFRQyxHQUFSLENBQVlFLFFBQVo7QUFDQSxRQUFLTixRQUFMLENBQWMsRUFBQ1IsUUFBUUUsUUFBUWEsTUFBUixDQUFlLENBQUMsRUFBQ0YsT0FBTUMsUUFBUCxFQUFpQlIsUUFBTyxLQUF4QixFQUFELENBQWYsQ0FBVCxFQUFkO0FBQ0E7Ozs4QkFFWVUsTSxFQUFRO0FBQUU7QUFDdEIsT0FBSSxLQUFLakIsS0FBTCxDQUFXRSxRQUFmLEVBQXlCO0FBQ3hCLFNBQUtPLFFBQUwsQ0FBYyxFQUFDUCxVQUFVZSxNQUFYLEVBQWQ7QUFDQSxJQUZELE1BRUs7QUFDSixTQUFLUixRQUFMLENBQWMsRUFBQ1IsUUFBUWdCLE1BQVQsRUFBZDtBQUNBO0FBQ0Q7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0MsVUFBVSxLQUFLaUIsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBaEQsR0FERDtBQUVDLHdCQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtuQixLQUFMLENBQVdFLFFBQVgsSUFBcUIsS0FBS0YsS0FBTCxDQUFXQyxNQUFoRCxFQUF3RCxPQUFPLEtBQUttQixXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUEvRCxHQUZEO0FBR0Msd0JBQUMsV0FBRCxJQUFhLGVBQWUsS0FBS0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUIsRUFBMkQsZUFBZSxLQUFLRyxtQkFBTCxDQUF5QkgsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBMUUsRUFBK0csZUFBZSxLQUFLSSxhQUFMLENBQW1CSixJQUFuQixDQUF3QixJQUF4QixDQUE5SCxHQUhEO0FBSUMsd0JBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS25CLEtBQXhCLEVBQStCLFNBQVMsS0FBS3dCLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLElBQXZCLENBQXhDO0FBSkQsSUFERDtBQVFBOzs7O0VBMUVnQk0sTUFBTUMsUzs7QUE2RXhCQyxPQUFPNUIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IG1vdmllcyxcblx0XHRcdGZpbHRlcmVkOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZVRvV2F0Y2goKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdHZhciB0b1dhdGNoID0gW11cblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZighZWxlbS50b2dnbGUpe1xuXHRcdFx0XHR0b1dhdGNoLnB1c2goZWxlbSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkOnRvV2F0Y2h9KVxuXHR9XG5cblx0aGFuZGxlUmVmcmVzaCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtmaWx0ZXJlZDogbnVsbH0pXG5cdH1cblxuXHRoYW5kbGVGaWx0ZXJXYXRjaGVkKGUpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUubW92aWVzXG5cdFx0dmFyIHdhdGNoZWQgPSBbXVxuXHRcdGN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbihlbGVtKXtcblx0XHRcdGlmIChlbGVtLnRvZ2dsZSl7XG5cdFx0XHRcdHdhdGNoZWQucHVzaChlbGVtKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWQ6IHdhdGNoZWR9LCAoKT0+e2NvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIHRoaXMuc3RhdGUpfSlcblx0fVxuXG5cdGhhbmRsZVRvZ2dsZShlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdGNvbnNvbGUubG9nKCdlIGlzOiAnLCBlKVxuXHRcdGN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbihlbGVtKXtcblx0XHRcdGlmIChlbGVtLnRpdGxlID09PSBlKXtcblx0XHRcdFx0aWYgKGVsZW0udG9nZ2xlKXtcblx0XHRcdFx0XHRlbGVtLnRvZ2dsZSA9IGZhbHNlXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGVsZW0udG9nZ2xlID0gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnR9KVxuXHR9XG5cblx0aGFuZGxlQWRkVG9MaXN0KGFkZGl0aW9uKSB7IC8va25vd24gYnVnOiBkdXBsaWNhdGUgbW92aWVzIGNhbiBiZSBhZGRlZFxuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHRjb25zb2xlLmxvZyhhZGRpdGlvbilcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IGN1cnJlbnQuY29uY2F0KFt7dGl0bGU6YWRkaXRpb24sIHRvZ2dsZTpmYWxzZX1dKX0pXG5cdH1cblxuXHRoYW5kbGVGb3VuZCAocmVzdWx0KSB7IC8va25vd24gYnVnOiB3aGVuIHNlYXJjaGVkIG1vdmllLCBTaG93IEFsbCBkb2Vzbid0IHdvcmtcblx0XHRpZiAodGhpcy5zdGF0ZS5maWx0ZXJlZCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWQ6IHJlc3VsdH0pXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QWRkVG9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGFkZGl0aW9uPXt0aGlzLmhhbmRsZUFkZFRvTGlzdC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5maWx0ZXJlZHx8dGhpcy5zdGF0ZS5tb3ZpZXN9IGZvdW5kPXt0aGlzLmhhbmRsZUZvdW5kLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDxXYXRjaFRvZ2dsZSB0b2dnbGVUb1dhdGNoPXt0aGlzLmhhbmRsZVRvV2F0Y2guYmluZCh0aGlzKX0gdG9nZ2xlV2F0Y2hlZD17dGhpcy5oYW5kbGVGaWx0ZXJXYXRjaGVkLmJpbmQodGhpcyl9IHRvZ2dsZVJlZnJlc2g9e3RoaXMuaGFuZGxlUmVmcmVzaC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8VmlkZW9MaXN0IG1vdmllcz17dGhpcy5zdGF0ZX0gdG9nZ2xlZD17dGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BcHAgPSBBcHAiXX0=