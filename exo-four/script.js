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
            key: "drawHouse",
            value: function drawHouse() {
                var oContext = this.context;

                oContext.lineWidth = 5;
                oContext.strokeStyle = "red";

                oContext.beginPath();
                oContext.moveTo(40, 80);
                oContext.lineTo(80, 40);
                oContext.lineTo(120, 80);

                oContext.moveTo(60, 80);
                oContext.lineTo(60, 120);
                oContext.lineTo(100, 120);
                oContext.lineTo(100, 80);

                oContext.rect(75, 100, 10, 20);

                oContext.stroke();
            }
        }, {
            key: "drawSun",
            value: function drawSun() {
                var oContext = this.context;

                oContext.fillStyle = "yellow";
                oContext.strokeStyle = "orange";

                oContext.beginPath();
                oContext.arc(180, 40, 30, 0, Math.PI * 2, true);

                oContext.fill();
                oContext.stroke();
            }
        }, {
            key: "drawPalmTree",
            value: function drawPalmTree() {
                var oContext = this.context;

                oContext.strokeStyle = "limegreen";

                oContext.beginPath();
                oContext.moveTo(20, 120);
                oContext.arcTo(20, 0, 100, 100, 20);

                oContext.stroke();
            }
        }, {
            key: "drawWaves",
            value: function drawWaves() {
                var oContext = this.context;

                oContext.strokeStyle = "turquoise";

                oContext.beginPath();
                oContext.moveTo(20, 150);
                oContext.bezierCurveTo(80, 130, 80, 180, 140, 150);
                oContext.moveTo(20, 170);
                oContext.bezierCurveTo(80, 150, 80, 200, 140, 170);

                oContext.stroke();
            }
        }, {
            key: "draw",
            value: function draw() {
                this.drawHouse();
                this.drawSun();
                this.drawPalmTree();
                this.drawWaves();
            }
        }]);

        return MyCanvApp;
    }(CanvApp);

    oApp = new MyCanvApp("#my-canvas");

    oApp.draw();
})(window.CanvApp);
