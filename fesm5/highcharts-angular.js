import { Component, ElementRef, EventEmitter, Input, Output, NgZone, NgModule } from '@angular/core';
import 'highcharts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighchartsChartComponent = /** @class */ (function () {
    function HighchartsChartComponent(el, _zone // #75
    ) {
        this.el = el;
        this._zone = _zone;
        this.updateChange = new EventEmitter(true);
        this.chartInstance = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    HighchartsChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ update = changes["update"] && changes["update"].currentValue;
        if (changes["options"] || update) {
            this.wrappedUpdateOrCreateChart();
            if (update) {
                this.updateChange.emit(false); // clear the flag after update
            }
        }
    };
    /**
     * @return {?}
     */
    HighchartsChartComponent.prototype.wrappedUpdateOrCreateChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // #75
        if (this.runOutsideAngular) {
            this._zone.runOutsideAngular(function () {
                _this.updateOrCreateChart();
            });
        }
        else {
            this.updateOrCreateChart();
        }
    };
    /**
     * @return {?}
     */
    HighchartsChartComponent.prototype.updateOrCreateChart = /**
     * @return {?}
     */
    function () {
        if (this.chart && this.chart.update) {
            this.chart.update(this.options, true, this.oneToOne || false);
        }
        else {
            this.chart = (/** @type {?} */ (this.Highcharts))[this.constructorType || 'chart'](this.el.nativeElement, this.options, this.callbackFunction || null);
            // emit chart instance on init
            this.chartInstance.emit(this.chart);
        }
    };
    /**
     * @return {?}
     */
    HighchartsChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // #44
        if (this.chart) { // #56
            // #56
            this.chart.destroy();
            this.chart = null;
        }
    };
    HighchartsChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'highcharts-chart',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    HighchartsChartComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
    ]; };
    HighchartsChartComponent.propDecorators = {
        "Highcharts": [{ type: Input },],
        "constructorType": [{ type: Input },],
        "callbackFunction": [{ type: Input },],
        "oneToOne": [{ type: Input },],
        "runOutsideAngular": [{ type: Input },],
        "options": [{ type: Input },],
        "update": [{ type: Input },],
        "updateChange": [{ type: Output },],
        "chartInstance": [{ type: Output },],
    };
    return HighchartsChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighchartsChartModule = /** @class */ (function () {
    function HighchartsChartModule() {
    }
    HighchartsChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HighchartsChartComponent],
                    exports: [HighchartsChartComponent]
                },] }
    ];
    /** @nocollapse */
    HighchartsChartModule.ctorParameters = function () { return []; };
    return HighchartsChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { HighchartsChartModule, HighchartsChartComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoaWdoY2hhcnRzLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgSGlnaGNoYXJ0czogdHlwZW9mIEhpZ2hjaGFydHM7XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBIaWdoY2hhcnRzLkNoYXJ0Q2FsbGJhY2tGdW5jdGlvbjtcbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuICBASW5wdXQoKSBydW5PdXRzaWRlQW5ndWxhcjogYm9vbGVhbjsgLy8gIzc1XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEhpZ2hjaGFydHMuT3B0aW9ucztcbiAgQElucHV0KCkgdXBkYXRlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICBAT3V0cHV0KCkgY2hhcnRJbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXI8SGlnaGNoYXJ0cy5DaGFydD4oKTsgLy8gIzI2XG5cbiAgcHJpdmF0ZSBjaGFydDogSGlnaGNoYXJ0cy5DaGFydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSAvLyAjNzVcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB1cGRhdGUgPSBjaGFuZ2VzLnVwZGF0ZSAmJiBjaGFuZ2VzLnVwZGF0ZS5jdXJyZW50VmFsdWU7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCB1cGRhdGUpIHtcbiAgICAgIHRoaXMud3JhcHBlZFVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFuZ2UuZW1pdChmYWxzZSk7IC8vIGNsZWFyIHRoZSBmbGFnIGFmdGVyIHVwZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCkgeyAvLyAjNzVcbiAgICBpZiAodGhpcy5ydW5PdXRzaWRlQW5ndWxhcikge1xuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3JDcmVhdGVDaGFydCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCAmJiB0aGlzLmNoYXJ0LnVwZGF0ZSkge1xuICAgICAgdGhpcy5jaGFydC51cGRhdGUodGhpcy5vcHRpb25zLCB0cnVlLCB0aGlzLm9uZVRvT25lIHx8IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydCA9ICh0aGlzLkhpZ2hjaGFydHMgYXMgYW55KVt0aGlzLmNvbnN0cnVjdG9yVHlwZSB8fCAnY2hhcnQnXShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuXG4gICAgICAvLyBlbWl0IGNoYXJ0IGluc3RhbmNlIG9uIGluaXRcbiAgICAgIHRoaXMuY2hhcnRJbnN0YW5jZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyAvLyAjNDRcbiAgICBpZiAodGhpcy5jaGFydCkgeyAgLy8gIzU2XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hpZ2hjaGFydHNDaGFydENvbXBvbmVudH0gZnJvbSAnLi9oaWdoY2hhcnRzLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgXSxcbiAgZXhwb3J0czogWyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFxQkUsa0NBQ1UsSUFDQTs7UUFEQSxPQUFFLEdBQUYsRUFBRTtRQUNGLFVBQUssR0FBTCxLQUFLOzRCQVBVLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQzs2QkFDOUIsSUFBSSxZQUFZLEVBQW9CO0tBTzFEOzs7OztJQUVKLDhDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxxQkFBTSxNQUFNLEdBQUcsT0FBTyxjQUFXLE9BQU8sV0FBUSxZQUFZLENBQUM7UUFDN0QsSUFBSSxPQUFPLGVBQVksTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2xDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7S0FDRjs7OztJQUVELDZEQUEwQjs7O0lBQTFCO1FBQUEsaUJBUUM7O1FBUEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7Ozs7SUFFRCxzREFBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFDLElBQUksQ0FBQyxVQUFpQixHQUFFLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLENBQ3BFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQzlCLENBQUM7O1lBR0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7O1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFObUIsVUFBVTtnQkFBMEMsTUFBTTs7OytCQVEzRSxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3NDQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUVMLE1BQU07a0NBQ04sTUFBTTs7bUNBakJUOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFFLHdCQUF3QixDQUFFO29CQUMxQyxPQUFPLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtpQkFDdEM7Ozs7Z0NBTkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==