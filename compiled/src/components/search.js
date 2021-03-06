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
			if (foundList.length < 1) {
				foundList = [{ title: 'None found' }];
			}
			found(foundList); //can pass down the search term via this.
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var _this2 = this;

			var value = e.target.value;
			this.setState({ value: value }, function () {
				return console.log(_this2.state);
			});
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
					React.createElement('input', { type: 'text', placeholder: 'Search', value: this.state.value, onChange: this.handleChange })
				),
				React.createElement('input', { type: 'submit', value: 'Submit' })
			);
		}
	}]);

	return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiZm91bmQiLCJmb3VuZExpc3QiLCJtb3ZpZXMiLCJmb3JFYWNoIiwidGl0bGUiLCJpbmNsdWRlcyIsInB1c2giLCJsZW5ndGgiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPLEVBQVIsRUFBYjtBQUNBLFFBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFIa0I7QUFJbEI7Ozs7K0JBRVlDLEMsRUFBRztBQUNmQSxLQUFFQyxjQUFGO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWSxLQUFLUixLQUFqQjtBQUNBLE9BQUlTLFdBQVcsS0FBS1IsS0FBTCxDQUFXQyxLQUFYLENBQWlCUSxXQUFqQixFQUFmO0FBQ0EsT0FBSUMsUUFBUSxLQUFLWCxLQUFMLENBQVdXLEtBQXZCO0FBQ0EsT0FBSUMsWUFBWSxFQUFoQjtBQUNBLFFBQUtaLEtBQUwsQ0FBV2EsTUFBWCxDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBU0QsTUFBVCxFQUFpQjtBQUMxQyxRQUFJQSxPQUFPRSxLQUFQLENBQWFMLFdBQWIsR0FBMkJNLFFBQTNCLENBQW9DUCxRQUFwQyxDQUFKLEVBQWtEO0FBQ2pERixhQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkssTUFBeEI7QUFDQUQsZUFBVUssSUFBVixDQUFlSixNQUFmO0FBQ0E7QUFDRCxJQUxEO0FBTUEsT0FBSUQsVUFBVU0sTUFBVixHQUFtQixDQUF2QixFQUF5QjtBQUN4Qk4sZ0JBQVksQ0FBQyxFQUFDRyxPQUFPLFlBQVIsRUFBRCxDQUFaO0FBQ0E7QUFDREosU0FBTUMsU0FBTixFQWZlLENBZUM7QUFDaEI7OzsrQkFFWVAsQyxFQUFHO0FBQUE7O0FBQ2YsT0FBSUgsUUFBUUcsRUFBRWMsTUFBRixDQUFTakIsS0FBckI7QUFDQSxRQUFLa0IsUUFBTCxDQUFjLEVBQUNsQixPQUFPQSxLQUFSLEVBQWQsRUFBOEI7QUFBQSxXQUFNSyxRQUFRQyxHQUFSLENBQVksT0FBS1AsS0FBakIsQ0FBTjtBQUFBLElBQTlCO0FBQ0E7OzsyQkFHUztBQUNULFVBQ0M7QUFBQTtBQUFBLE1BQU0sSUFBRyxRQUFULEVBQWtCLFVBQVUsS0FBS29CLFlBQUwsQ0FBa0JqQixJQUFsQixDQUF1QixJQUF2QixDQUE1QjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBRUMsb0NBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksUUFBL0IsRUFBd0MsT0FBTyxLQUFLSCxLQUFMLENBQVdDLEtBQTFELEVBQWlFLFVBQVUsS0FBS0MsWUFBaEY7QUFGRCxLQUREO0FBS0MsbUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFMRCxJQUREO0FBU0E7Ozs7RUF6Q21CbUIsTUFBTUMsUzs7QUE0QzNCQyxPQUFPekIsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHt2YWx1ZTogJyd9O1xuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cblx0aGFuZGxlU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuXHRcdHZhciB0b1NlYXJjaCA9IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKVxuXHRcdHZhciBmb3VuZCA9IHRoaXMucHJvcHMuZm91bmRcblx0XHR2YXIgZm91bmRMaXN0ID0gW11cblx0XHR0aGlzLnByb3BzLm1vdmllcy5mb3JFYWNoKGZ1bmN0aW9uKG1vdmllcykge1xuXHRcdFx0aWYgKG1vdmllcy50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRvU2VhcmNoKSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdmb3VuZCBpdCcsIG1vdmllcylcblx0XHRcdFx0Zm91bmRMaXN0LnB1c2gobW92aWVzKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0aWYgKGZvdW5kTGlzdC5sZW5ndGggPCAxKXtcblx0XHRcdGZvdW5kTGlzdCA9IFt7dGl0bGU6ICdOb25lIGZvdW5kJ31dXG5cdFx0fVxuXHRcdGZvdW5kKGZvdW5kTGlzdCkvL2NhbiBwYXNzIGRvd24gdGhlIHNlYXJjaCB0ZXJtIHZpYSB0aGlzLlxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGUpIHtcblx0XHR2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0sICgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpKVxuXHR9XG5cblxuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIGlkPVwic2VhcmNoXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9ID5cblx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFNlYXJjaCBZb3VyIE1vdmllczpcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAgLz5cblx0XHRcdDwvZm9ybT5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaCJdfQ==