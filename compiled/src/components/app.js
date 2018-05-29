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
		key: 'componentDidMount',
		value: function componentDidMount() {
			var movies = this.state.movies;
			var counter = 0;
			var counterTarget = this.state.movies.length;
			var setState = this.setState.bind(this);
			var movieList = [];
			var cb = function cb() {
				setState({ movies: movieList, filtered: null });
			};
			movies.forEach(function (elem) {
				$.ajax({
					url: 'https://api.themoviedb.org/3/search/movie?api_key={0bdb361e966d04d4fcadbf09dbf49bb8}&query=' + elem.title,
					method: 'GET',
					data: {
						api_key: '0bdb361e966d04d4fcadbf09dbf49bb8'
					},
					success: function success(data) {
						//console.log(data)
						var id = data.results[0].id;
						//console.log('id is ', id)
						$.ajax({
							url: 'https://api.themoviedb.org/3/movie/' + id,
							method: 'GET',
							data: {
								api_key: '0bdb361e966d04d4fcadbf09dbf49bb8'
							},
							success: function success(data) {
								//console.log('data is :', data)
								var scheme = {
									title: null,
									toggle: null,
									year: null,
									runtime: null,
									voteAverage: null
								};
								scheme.title = data.title;
								scheme.toggle = false;
								scheme.year = data.release_date;
								scheme.runtime = data.runtime;
								scheme.voteAverage = data.vote_average;
								movieList.push(scheme);
								counter++;
								if (counter === counterTarget) {
									cb();
								}
								//console.log('scheme looks like: ', scheme)
							},
							error: function error(err) {
								console.log('error is: ', err.statusText);
							}
						});
						setState({ movies: movieList });
						//console.log('data is :', data)
					},
					error: function error(err) {
						console.log('error is: ', err.statusText);
					}
				});
			});
			console.log('movieList', movieList);
		}
	}, {
		key: 'handleToWatch',
		value: function handleToWatch() {
			//known bug: no indication for watched/to watch exists
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsImNvdW50ZXIiLCJjb3VudGVyVGFyZ2V0IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJiaW5kIiwibW92aWVMaXN0IiwiY2IiLCJmb3JFYWNoIiwiZWxlbSIsIiQiLCJhamF4IiwidXJsIiwidGl0bGUiLCJtZXRob2QiLCJkYXRhIiwiYXBpX2tleSIsInN1Y2Nlc3MiLCJpZCIsInJlc3VsdHMiLCJzY2hlbWUiLCJ0b2dnbGUiLCJ5ZWFyIiwicnVudGltZSIsInZvdGVBdmVyYWdlIiwicmVsZWFzZV9kYXRlIiwidm90ZV9hdmVyYWdlIiwicHVzaCIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJjdXJyZW50IiwidG9XYXRjaCIsImUiLCJ3YXRjaGVkIiwiYWRkaXRpb24iLCJjb25jYXQiLCJyZXN1bHQiLCJoYW5kbGVBZGRUb0xpc3QiLCJoYW5kbGVGb3VuZCIsImhhbmRsZVRvV2F0Y2giLCJoYW5kbGVGaWx0ZXJXYXRjaGVkIiwiaGFuZGxlUmVmcmVzaCIsImhhbmRsZVRvZ2dsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVMLGdCQUFjO0FBQUE7O0FBQUE7O0FBRWIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVFBLE1BREk7QUFFWkMsYUFBVTtBQUZFLEdBQWI7QUFGYTtBQU1iOzs7O3NDQUVtQjtBQUNuQixPQUFJRCxTQUFTLEtBQUtELEtBQUwsQ0FBV0MsTUFBeEI7QUFDQSxPQUFJRSxVQUFVLENBQWQ7QUFDQSxPQUFJQyxnQkFBZ0IsS0FBS0osS0FBTCxDQUFXQyxNQUFYLENBQWtCSSxNQUF0QztBQUNBLE9BQUlDLFdBQVcsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWY7QUFDQSxPQUFJ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RCxFQUF3RCxPQUFPLEtBQUswQyxXQUFMLENBQWlCcEMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBL0QsR0FGRDtBQUdDLHdCQUFDLFdBQUQsSUFBYSxlQUFlLEtBQUtxQyxhQUFMLENBQW1CckMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUIsRUFBMkQsZUFBZSxLQUFLc0MsbUJBQUwsQ0FBeUJ0QyxJQUF6QixDQUE4QixJQUE5QixDQUExRSxFQUErRyxlQUFlLEtBQUt1QyxhQUFMLENBQW1CdkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBOUgsR0FIRDtBQUlDLHdCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtQLEtBQXhCLEVBQStCLFNBQVMsS0FBSytDLFlBQUwsQ0FBa0J4QyxJQUFsQixDQUF1QixJQUF2QixDQUF4QztBQUpELElBREQ7QUFRQTs7OztFQXhJZ0J5QyxNQUFNQyxTOztBQTJJeEJDLE9BQU9uRCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogbW92aWVzLFxuXHRcdFx0ZmlsdGVyZWQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIG1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuXHRcdHZhciBjb3VudGVyID0gMDtcblx0XHR2YXIgY291bnRlclRhcmdldCA9IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDtcblx0XHR2YXIgc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG5cdFx0dmFyIG1vdmllTGlzdCA9IFtdO1xuXHRcdHZhciBjYiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHNldFN0YXRlKHttb3ZpZXM6bW92aWVMaXN0LCBmaWx0ZXJlZDogbnVsbH0pO1xuXHRcdH07XG5cdFx0bW92aWVzLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR1cmw6ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PXswYmRiMzYxZTk2NmQwNGQ0ZmNhZGJmMDlkYmY0OWJiOH0mcXVlcnk9JyArIGVsZW0udGl0bGUsXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhcGlfa2V5OiAnMGJkYjM2MWU5NjZkMDRkNGZjYWRiZjA5ZGJmNDliYjgnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0XHR2YXIgaWQgPSBkYXRhLnJlc3VsdHNbMF0uaWRcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdpZCBpcyAnLCBpZClcblx0XHRcdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8nICsgaWQsXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRhcGlfa2V5OiAnMGJkYjM2MWU5NjZkMDRkNGZjYWRiZjA5ZGJmNDliYjgnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coJ2RhdGEgaXMgOicsIGRhdGEpXG5cdFx0XHRcdFx0XHRcdHZhciBzY2hlbWUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0dG9nZ2xlOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHllYXI6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0cnVudGltZTogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHR2b3RlQXZlcmFnZTogbnVsbFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNjaGVtZS50aXRsZT0gZGF0YS50aXRsZVxuXHRcdFx0XHRcdFx0XHRzY2hlbWUudG9nZ2xlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0c2NoZW1lLnllYXI9IGRhdGEucmVsZWFzZV9kYXRlXG5cdFx0XHRcdFx0XHRcdHNjaGVtZS5ydW50aW1lPSBkYXRhLnJ1bnRpbWVcblx0XHRcdFx0XHRcdFx0c2NoZW1lLnZvdGVBdmVyYWdlPSBkYXRhLnZvdGVfYXZlcmFnZVxuXHRcdFx0XHRcdFx0XHRtb3ZpZUxpc3QucHVzaChzY2hlbWUpXG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIrK1xuXHRcdFx0XHRcdFx0XHRpZihjb3VudGVyID09PSBjb3VudGVyVGFyZ2V0KXtcblx0XHRcdFx0XHRcdFx0XHRjYigpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnc2NoZW1lIGxvb2tzIGxpa2U6ICcsIHNjaGVtZSlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBpczogJywgZXJyLnN0YXR1c1RleHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgXG5cdFx0XHRcdFx0c2V0U3RhdGUoe21vdmllczogbW92aWVMaXN0fSlcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdkYXRhIGlzIDonLCBkYXRhKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgaXM6ICcsIGVyci5zdGF0dXNUZXh0KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0Y29uc29sZS5sb2coJ21vdmllTGlzdCcsIG1vdmllTGlzdClcblx0fVxuXG5cdGhhbmRsZVRvV2F0Y2goKSB7IC8va25vd24gYnVnOiBubyBpbmRpY2F0aW9uIGZvciB3YXRjaGVkL3RvIHdhdGNoIGV4aXN0c1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHR2YXIgdG9XYXRjaCA9IFtdXG5cdFx0Y3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0aWYoIWVsZW0udG9nZ2xlKXtcblx0XHRcdFx0dG9XYXRjaC5wdXNoKGVsZW0pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnNldFN0YXRlKHtmaWx0ZXJlZDp0b1dhdGNofSlcblx0fVxuXG5cdGhhbmRsZVJlZnJlc2goKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyZWQ6IG51bGx9KVxuXHR9XG5cblx0aGFuZGxlRmlsdGVyV2F0Y2hlZChlKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLm1vdmllc1xuXHRcdHZhciB3YXRjaGVkID0gW11cblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS50b2dnbGUpe1xuXHRcdFx0XHR3YXRjaGVkLnB1c2goZWxlbSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkOiB3YXRjaGVkfSwgKCk9Pntjb25zb2xlLmxvZygnZmlsdGVyZWQnLCB0aGlzLnN0YXRlKX0pXG5cdH1cblxuXHRoYW5kbGVUb2dnbGUoZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5tb3ZpZXNcblx0XHRjb25zb2xlLmxvZygnZSBpczogJywgZSlcblx0XHRjdXJyZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS50aXRsZSA9PT0gZSl7XG5cdFx0XHRcdGlmIChlbGVtLnRvZ2dsZSl7XG5cdFx0XHRcdFx0ZWxlbS50b2dnbGUgPSBmYWxzZVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRlbGVtLnRvZ2dsZSA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBjdXJyZW50fSlcblx0fVxuXG5cdGhhbmRsZUFkZFRvTGlzdChhZGRpdGlvbikgeyAvL2tub3duIGJ1ZzogZHVwbGljYXRlIG1vdmllcyBjYW4gYmUgYWRkZWRcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUubW92aWVzXG5cdFx0Y29uc29sZS5sb2coYWRkaXRpb24pXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBjdXJyZW50LmNvbmNhdChbe3RpdGxlOmFkZGl0aW9uLCB0b2dnbGU6ZmFsc2V9XSl9KVxuXHR9XG5cblx0aGFuZGxlRm91bmQgKHJlc3VsdCkgeyAvL2tub3duIGJ1Zzogd2hlbiBzZWFyY2hlZCBtb3ZpZSwgU2hvdyBBbGwgZG9lc24ndCB3b3JrXG5cdFx0aWYgKHRoaXMuc3RhdGUuZmlsdGVyZWQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkOiByZXN1bHR9KVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVzOiByZXN1bHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEFkZFRvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBhZGRpdGlvbj17dGhpcy5oYW5kbGVBZGRUb0xpc3QuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFNlYXJjaCBtb3ZpZXM9e3RoaXMuc3RhdGUuZmlsdGVyZWR8fHRoaXMuc3RhdGUubW92aWVzfSBmb3VuZD17dGhpcy5oYW5kbGVGb3VuZC5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8V2F0Y2hUb2dnbGUgdG9nZ2xlVG9XYXRjaD17dGhpcy5oYW5kbGVUb1dhdGNoLmJpbmQodGhpcyl9IHRvZ2dsZVdhdGNoZWQ9e3RoaXMuaGFuZGxlRmlsdGVyV2F0Y2hlZC5iaW5kKHRoaXMpfSB0b2dnbGVSZWZyZXNoPXt0aGlzLmhhbmRsZVJlZnJlc2guYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PFZpZGVvTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGV9IHRvZ2dsZWQ9e3RoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuQXBwID0gQXBwIl19