'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddToList = function (_React$Component) {
	_inherits(AddToList, _React$Component);

	function AddToList(props) {
		_classCallCheck(this, AddToList);

		var _this = _possibleConstructorReturn(this, (AddToList.__proto__ || Object.getPrototypeOf(AddToList)).call(this, props));

		_this.state = { value: '' };
		return _this;
	}

	_createClass(AddToList, [{
		key: 'handleChange',
		value: function handleChange(e) {
			var value = e.target.value;
			this.setState({ value: value }, function () {
				console.log(this.state);
			});
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			console.log('handleSubmit working');
			this.props.addition(this.state.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'form',
				{ id: 'addInput', onSubmit: this.handleSubmit.bind(this) },
				React.createElement(
					'label',
					null,
					'Add New Movie:',
					React.createElement('input', { type: 'text', placeholder: 'Add a movie', onChange: this.handleChange.bind(this) })
				),
				React.createElement('input', { type: 'submit', value: 'Add' })
			);
		}
	}]);

	return AddToList;
}(React.Component);

window.AddToList.AddToList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FkZFRvTGlzdC5qc3giXSwibmFtZXMiOlsiQWRkVG9MaXN0IiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsInRhcmdldCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiYWRkaXRpb24iLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0wsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sRUFBUixFQUFiO0FBRmtCO0FBR2xCOzs7OytCQUVZQyxDLEVBQUc7QUFDZixPQUFJRCxRQUFRQyxFQUFFQyxNQUFGLENBQVNGLEtBQXJCO0FBQ0EsUUFBS0csUUFBTCxDQUFjLEVBQUNILE9BQU9BLEtBQVIsRUFBZCxFQUE4QixZQUFVO0FBQUNJLFlBQVFDLEdBQVIsQ0FBWSxLQUFLTixLQUFqQjtBQUF3QixJQUFqRTtBQUNBOzs7K0JBRVlFLEMsRUFBRztBQUNmQSxLQUFFSyxjQUFGO0FBQ0FGLFdBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLFFBQUtQLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixLQUFLUixLQUFMLENBQVdDLEtBQS9CO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQU0sSUFBRyxVQUFULEVBQW9CLFVBQVUsS0FBS1EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBOUI7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUVDLG9DQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGFBQS9CLEVBQTZDLFVBQVUsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkQ7QUFGRCxLQUREO0FBS0UsbUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0I7QUFMRixJQUREO0FBU0E7Ozs7RUEzQnNCRSxNQUFNQyxTOztBQThCOUJDLE9BQU9oQixTQUFQLENBQWlCQSxTQUFqQiIsImZpbGUiOiJhZGRUb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGRUb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShlKSB7XG5cdFx0dmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWVcblx0XHR0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9LCBmdW5jdGlvbigpe2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpfSlcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc29sZS5sb2coJ2hhbmRsZVN1Ym1pdCB3b3JraW5nJylcblx0XHR0aGlzLnByb3BzLmFkZGl0aW9uKHRoaXMuc3RhdGUudmFsdWUpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIGlkPVwiYWRkSW5wdXRcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gPlxuXHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0QWRkIE5ldyBNb3ZpZTpcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIG1vdmllXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BZGRUb0xpc3QuQWRkVG9MaXN0Il19