"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (CanvApp) {

    var oApp = void 0;

    var MyCanvApp = function (_CanvApp) {
        _inherits(MyCanvApp, _CanvApp);

        function MyCanvApp() {
            _classCallCheck(this, MyCanvApp);

            return _possibleConstructorReturn(this, (MyCanvApp.__proto__ || Object.getPrototypeOf(MyCanvApp)).apply(this, arguments));
        }

        _createClass(MyCanvApp, [{
            key: "setup",
            value: function setup() {
                var _this2 = this;

                var oSourceImage = new Image();

                oSourceImage.addEventListener("load", function () {
                    _this2.context.drawImage(oSourceImage, 0, 0);

                    _this2._originalImageData = _this2.context.getImageData(0, 0, _this2.width, _this2.height);
                });
                oSourceImage.src = "../_shared/big-kitten.jpg";

                var _arr = ["no-red", "negative", "bw", "reset"];
                for (var _i = 0; _i < _arr.length; _i++) {
                    var sFilter = _arr[_i];
                    document.getElementById(sFilter).addEventListener("click", oApp.buttonClicked.bind(oApp));
                }
            }
        }, {
            key: "buttonClicked",
            value: function buttonClicked(oEvent) {
                var oImageData = void 0,
                    oModifiedImageData = void 0;

                oEvent.preventDefault();

                oImageData = this.context.getImageData(0, 0, this.width, this.height);

                switch (oEvent.target.id) {
                    case "no-red":
                        oModifiedImageData = this.applyNoRedFilter(oImageData);
                        break;
                    case "negative":
                        oModifiedImageData = this.applyNegativeFilter(oImageData);
                        break;
                    case "bw":
                        oModifiedImageData = this.applyBlackAndWhiteFilter(oImageData);
                        break;
                    case "reset":
                    default:
                        oModifiedImageData = this._originalImageData;
                        break;
                }

                this.context.putImageData(oModifiedImageData, 0, 0);
            }
        }, {
            key: "applyNoRedFilter",
            value: function applyNoRedFilter(oImageData) {
                var i = 0;

                do {
                    oImageData.data[i] = 0;
                } while (oImageData.data[i += 4] != null);

                return oImageData;
            }
        }, {
            key: "applyNegativeFilter",
            value: function applyNegativeFilter(oImageData) {
                var i = 0;

                do {
                    oImageData.data[i] = 255 - oImageData.data[i];
                    oImageData.data[i + 1] = 255 - oImageData.data[i + 1];
                    oImageData.data[i + 2] = 255 - oImageData.data[i + 2];
                } while (oImageData.data[i += 4] != null);

                return oImageData;
            }
        }, {
            key: "applyBlackAndWhiteFilter",
            value: function applyBlackAndWhiteFilter(oImageData) {
                var i = 0;

                do {
                    var iLuminance = oImageData.data[i] * 0.299 + oImageData.data[i + 1] * 0.587 + oImageData.data[i + 2] * 0.114;

                    oImageData.data[i] = iLuminance;
                    oImageData.data[i + 1] = iLuminance;
                    oImageData.data[i + 2] = iLuminance;
                } while (oImageData.data[i += 4] != null);

                return oImageData;
            }
        }]);

        return MyCanvApp;
    }(CanvApp);

    oApp = new MyCanvApp("#my-canvas");

    oApp.setup();
})(window.CanvApp);
