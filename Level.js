var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Level = (function (_super) {
    __extends(Level, _super);
    function Level(name, image) {
        var _this = _super.call(this, name) || this;
        _this.image = image;
        return _this;
    }
    Level.prototype.show = function (quantity) {
        return quantity + ' <img src="images/' + this.image + '.svg" title="' + this.Name + '" alt="' + this.Name + '" class="resource_img">';
    };
    return Level;
}(Resource));
//# sourceMappingURL=Level.js.map