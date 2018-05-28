'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = { value: '' };
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Search, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			console.log(this.props);
			var toSearch = this.state.value.toLowerCase();
			var found = this.props.found;
			var foundList = [];
			this.props.movies.forEach(function (movies) {
				if (movies.title.toLowerCase().includes(toSearch)) {
					console.log('found it', movies);
					foundList.push(movies);
				}
			});
			found(foundList);
			//console.log(this.props.test)//can pass down the search term via this.
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var _this2 = this;

			//console.log(this)
			var value = e.target.value;
			this.setState({ value: value }, function () {
				return console.log(_this2.state);
			});
			//this.handleSubmit(value)
			//console.log(this.state)
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'form',
				{ id: 'search', onSubmit: this.handleSubmit.bind(this) },
				React.createElement(
					'label',
					null,
					'Search Your Movies:',
					React.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
				),
				React.createElement('input', { type: 'submit', value: 'Submit' })
			);
		}
	}]);

	return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiZm91bmQiLCJmb3VuZExpc3QiLCJtb3ZpZXMiLCJmb3JFYWNoIiwidGl0bGUiLCJpbmNsdWRlcyIsInB1c2giLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPLEVBQVIsRUFBYjtBQUNBLFFBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFIa0I7QUFJbEI7Ozs7K0JBRVlDLEMsRUFBRztBQUNmQSxLQUFFQyxjQUFGO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWSxLQUFLUixLQUFqQjtBQUNBLE9BQUlTLFdBQVcsS0FBS1IsS0FBTCxDQUFXQyxLQUFYLENBQWlCUSxXQUFqQixFQUFmO0FBQ0EsT0FBSUMsUUFBUSxLQUFLWCxLQUFMLENBQVdXLEtBQXZCO0FBQ0EsT0FBSUMsWUFBWSxFQUFoQjtBQUNBLFFBQUtaLEtBQUwsQ0FBV2EsTUFBWCxDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBU0QsTUFBVCxFQUFpQjtBQUMxQyxRQUFJQSxPQUFPRSxLQUFQLENBQWFMLFdBQWIsR0FBMkJNLFFBQTNCLENBQW9DUCxRQUFwQyxDQUFKLEVBQWtEO0FBQ2pERixhQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkssTUFBeEI7QUFDQUQsZUFBVUssSUFBVixDQUFlSixNQUFmO0FBQ0E7QUFDRCxJQUxEO0FBTUFGLFNBQU1DLFNBQU47QUFDQTtBQUNBOzs7K0JBRVlQLEMsRUFBRztBQUFBOztBQUNmO0FBQ0EsT0FBSUgsUUFBUUcsRUFBRWEsTUFBRixDQUFTaEIsS0FBckI7QUFDQSxRQUFLaUIsUUFBTCxDQUFjLEVBQUNqQixPQUFPQSxLQUFSLEVBQWQsRUFBOEI7QUFBQSxXQUFNSyxRQUFRQyxHQUFSLENBQVksT0FBS1AsS0FBakIsQ0FBTjtBQUFBLElBQTlCO0FBQ0E7QUFDQTtBQUNBOzs7MkJBR1M7QUFDVCxVQUNDO0FBQUE7QUFBQSxNQUFNLElBQUcsUUFBVCxFQUFrQixVQUFVLEtBQUttQixZQUFMLENBQWtCaEIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBNUI7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUVDLG9DQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtILEtBQUwsQ0FBV0MsS0FBckMsRUFBNEMsVUFBVSxLQUFLQyxZQUEzRDtBQUZELEtBREQ7QUFLQyxtQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUxELElBREQ7QUFTQTs7OztFQTFDbUJrQixNQUFNQyxTOztBQTZDM0JDLE9BQU94QixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge3ZhbHVlOiAnJ307XG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRoYW5kbGVTdWJtaXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cdFx0dmFyIHRvU2VhcmNoID0gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cdFx0dmFyIGZvdW5kID0gdGhpcy5wcm9wcy5mb3VuZFxuXHRcdHZhciBmb3VuZExpc3QgPSBbXVxuXHRcdHRoaXMucHJvcHMubW92aWVzLmZvckVhY2goZnVuY3Rpb24obW92aWVzKSB7XG5cdFx0XHRpZiAobW92aWVzLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModG9TZWFyY2gpKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2ZvdW5kIGl0JywgbW92aWVzKVxuXHRcdFx0XHRmb3VuZExpc3QucHVzaChtb3ZpZXMpXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRmb3VuZChmb3VuZExpc3QpXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnRlc3QpLy9jYW4gcGFzcyBkb3duIHRoZSBzZWFyY2ggdGVybSB2aWEgdGhpcy5cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShlKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzKVxuXHRcdHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSwgKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZSkpXG5cdFx0Ly90aGlzLmhhbmRsZVN1Ym1pdCh2YWx1ZSlcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG5cdH1cblxuXG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gaWQ9XCJzZWFyY2hcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gPlxuXHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0U2VhcmNoIFlvdXIgTW92aWVzOlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAgLz5cblx0XHRcdDwvZm9ybT5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaCJdfQ==