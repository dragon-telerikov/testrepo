var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var TimePickerViewModel = (function (_super) {
    __extends(TimePickerViewModel, _super);
    function TimePickerViewModel(selectedDate, selectedCallback) {
        _super.call(this);
        this.hour = selectedDate.getHours();
        this.minute = selectedDate.getMinutes();
        this._selectedCallback = selectedCallback;
    }
    Object.defineProperty(TimePickerViewModel.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (value) {
            if (this._hour !== value) {
                this._hour = value;
                this.notifyPropertyChange("hour", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimePickerViewModel.prototype, "minute", {
        get: function () {
            return this._minute;
        },
        set: function (value) {
            if (this._minute !== value) {
                this._minute = value;
                this.notifyPropertyChange("minute", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    TimePickerViewModel.prototype.done = function () {
        this._selectedCallback(this.hour, this.minute);
        navigationModule.goBack();
    };
    return TimePickerViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.TimePickerViewModel = TimePickerViewModel;
