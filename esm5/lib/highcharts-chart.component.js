/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, NgZone, OnChanges, SimpleChanges } from "@angular/core";
import * as Highcharts from "highcharts";
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
export { HighchartsChartComponent };
function HighchartsChartComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HighchartsChartComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HighchartsChartComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HighchartsChartComponent.propDecorators;
    /** @type {?} */
    HighchartsChartComponent.prototype.Highcharts;
    /** @type {?} */
    HighchartsChartComponent.prototype.constructorType;
    /** @type {?} */
    HighchartsChartComponent.prototype.callbackFunction;
    /** @type {?} */
    HighchartsChartComponent.prototype.oneToOne;
    /** @type {?} */
    HighchartsChartComponent.prototype.runOutsideAngular;
    /** @type {?} */
    HighchartsChartComponent.prototype.options;
    /** @type {?} */
    HighchartsChartComponent.prototype.update;
    /** @type {?} */
    HighchartsChartComponent.prototype.updateChange;
    /** @type {?} */
    HighchartsChartComponent.prototype.chartInstance;
    /** @type {?} */
    HighchartsChartComponent.prototype.chart;
    /** @type {?} */
    HighchartsChartComponent.prototype.el;
    /** @type {?} */
    HighchartsChartComponent.prototype._zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxzQkFBc0I7QUFDaEksT0FBTyxLQUFLLFVBQVUsbUJBQW1COztJQW9CdkMsa0NBQ1UsSUFDQTs7UUFEQSxPQUFFLEdBQUYsRUFBRTtRQUNGLFVBQUssR0FBTCxLQUFLOzRCQVBVLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQzs2QkFDOUIsSUFBSSxZQUFZLEVBQW9CO0tBTzFEOzs7OztJQUVKLDhDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxxQkFBTSxNQUFNLEdBQUcsT0FBTyxjQUFXLE9BQU8sV0FBUSxZQUFZLENBQUM7UUFDN0QsSUFBSSxPQUFPLGVBQVksTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2xDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7S0FDRjs7OztJQUVELDZEQUEwQjs7O0lBQTFCO1FBQUEsaUJBUUM7O1FBUEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7Ozs7SUFFRCxzREFBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFDLElBQUksQ0FBQyxVQUFpQixFQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FDOUIsQ0FBQzs7WUFHRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7S0FDRjs7OztJQUVELDhDQUFXOzs7SUFBWDs7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRyxNQUFNOztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0tBQ0Y7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBTm1CLFVBQVU7Z0JBQTBDLE1BQU07OzsrQkFRM0UsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLEtBQUs7NkJBQ0wsS0FBSztzQ0FDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FFTCxNQUFNO2tDQUNOLE1BQU07O21DQWpCVDs7U0FPYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGlnaGNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEhpZ2hjaGFydHM6IHR5cGVvZiBIaWdoY2hhcnRzO1xuICBASW5wdXQoKSBjb25zdHJ1Y3RvclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tGdW5jdGlvbjogSGlnaGNoYXJ0cy5DaGFydENhbGxiYWNrRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uZVRvT25lOiBib29sZWFuOyAvLyAjMjBcbiAgQElucHV0KCkgcnVuT3V0c2lkZUFuZ3VsYXI6IGJvb2xlYW47IC8vICM3NVxuICBASW5wdXQoKSBvcHRpb25zOiBIaWdoY2hhcnRzLk9wdGlvbnM7XG4gIEBJbnB1dCgpIHVwZGF0ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgdXBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgQE91dHB1dCgpIGNoYXJ0SW5zdGFuY2UgPSBuZXcgRXZlbnRFbWl0dGVyPEhpZ2hjaGFydHMuQ2hhcnQ+KCk7IC8vICMyNlxuXG4gIHByaXZhdGUgY2hhcnQ6IEhpZ2hjaGFydHMuQ2hhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUgLy8gIzc1XG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgdXBkYXRlID0gY2hhbmdlcy51cGRhdGUgJiYgY2hhbmdlcy51cGRhdGUuY3VycmVudFZhbHVlO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgdXBkYXRlKSB7XG4gICAgICB0aGlzLndyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hhbmdlLmVtaXQoZmFsc2UpOyAvLyBjbGVhciB0aGUgZmxhZyBhZnRlciB1cGRhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cmFwcGVkVXBkYXRlT3JDcmVhdGVDaGFydCgpIHsgLy8gIzc1XG4gICAgaWYgKHRoaXMucnVuT3V0c2lkZUFuZ3VsYXIpIHtcbiAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQgJiYgdGhpcy5jaGFydC51cGRhdGUpIHtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKHRoaXMub3B0aW9ucywgdHJ1ZSwgdGhpcy5vbmVUb09uZSB8fCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQgPSAodGhpcy5IaWdoY2hhcnRzIGFzIGFueSlbdGhpcy5jb25zdHJ1Y3RvclR5cGUgfHwgJ2NoYXJ0J10oXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICB0aGlzLmNhbGxiYWNrRnVuY3Rpb24gfHwgbnVsbFxuICAgICAgKTtcblxuICAgICAgLy8gZW1pdCBjaGFydCBpbnN0YW5jZSBvbiBpbml0XG4gICAgICB0aGlzLmNoYXJ0SW5zdGFuY2UuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgLy8gIzQ0XG4gICAgaWYgKHRoaXMuY2hhcnQpIHsgIC8vICM1NlxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==