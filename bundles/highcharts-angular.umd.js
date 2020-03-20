(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('highcharts-angular', ['exports', '@angular/core'], factory) :
    (factory((global['highcharts-angular'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HighchartsChartComponent = /** @class */ (function () {
        function HighchartsChartComponent(el, _zone // #75
        ) {
            this.el = el;
            this._zone = _zone;
            this.updateChange = new core.EventEmitter(true);
            this.chartInstance = new core.EventEmitter();
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
                    this.chart = ( /** @type {?} */(this.Highcharts))[this.constructorType || 'chart'](this.el.nativeElement, this.options, this.callbackFunction || null);
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
            { type: core.Component, args: [{
                        selector: 'highcharts-chart',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        HighchartsChartComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.NgZone, },
            ];
        };
        HighchartsChartComponent.propDecorators = {
            "Highcharts": [{ type: core.Input },],
            "constructorType": [{ type: core.Input },],
            "callbackFunction": [{ type: core.Input },],
            "oneToOne": [{ type: core.Input },],
            "runOutsideAngular": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "update": [{ type: core.Input },],
            "updateChange": [{ type: core.Output },],
            "chartInstance": [{ type: core.Output },],
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
            { type: core.NgModule, args: [{
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

    exports.HighchartsChartModule = HighchartsChartModule;
    exports.HighchartsChartComponent = HighchartsChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaGlnaGNoYXJ0cy1hbmd1bGFyL2xpYi9oaWdoY2hhcnRzLWNoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vaGlnaGNoYXJ0cy1hbmd1bGFyL2xpYi9oaWdoY2hhcnRzLWNoYXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGlnaGNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEhpZ2hjaGFydHM6IHR5cGVvZiBIaWdoY2hhcnRzO1xuICBASW5wdXQoKSBjb25zdHJ1Y3RvclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tGdW5jdGlvbjogSGlnaGNoYXJ0cy5DaGFydENhbGxiYWNrRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uZVRvT25lOiBib29sZWFuOyAvLyAjMjBcbiAgQElucHV0KCkgcnVuT3V0c2lkZUFuZ3VsYXI6IGJvb2xlYW47IC8vICM3NVxuICBASW5wdXQoKSBvcHRpb25zOiBIaWdoY2hhcnRzLk9wdGlvbnM7XG4gIEBJbnB1dCgpIHVwZGF0ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgdXBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgQE91dHB1dCgpIGNoYXJ0SW5zdGFuY2UgPSBuZXcgRXZlbnRFbWl0dGVyPEhpZ2hjaGFydHMuQ2hhcnQ+KCk7IC8vICMyNlxuXG4gIHByaXZhdGUgY2hhcnQ6IEhpZ2hjaGFydHMuQ2hhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUgLy8gIzc1XG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgdXBkYXRlID0gY2hhbmdlcy51cGRhdGUgJiYgY2hhbmdlcy51cGRhdGUuY3VycmVudFZhbHVlO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgdXBkYXRlKSB7XG4gICAgICB0aGlzLndyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hhbmdlLmVtaXQoZmFsc2UpOyAvLyBjbGVhciB0aGUgZmxhZyBhZnRlciB1cGRhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cmFwcGVkVXBkYXRlT3JDcmVhdGVDaGFydCgpIHsgLy8gIzc1XG4gICAgaWYgKHRoaXMucnVuT3V0c2lkZUFuZ3VsYXIpIHtcbiAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQgJiYgdGhpcy5jaGFydC51cGRhdGUpIHtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKHRoaXMub3B0aW9ucywgdHJ1ZSwgdGhpcy5vbmVUb09uZSB8fCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQgPSAodGhpcy5IaWdoY2hhcnRzIGFzIGFueSlbdGhpcy5jb25zdHJ1Y3RvclR5cGUgfHwgJ2NoYXJ0J10oXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICB0aGlzLmNhbGxiYWNrRnVuY3Rpb24gfHwgbnVsbFxuICAgICAgKTtcblxuICAgICAgLy8gZW1pdCBjaGFydCBpbnN0YW5jZSBvbiBpbml0XG4gICAgICB0aGlzLmNoYXJ0SW5zdGFuY2UuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgLy8gIzQ0XG4gICAgaWYgKHRoaXMuY2hhcnQpIHsgIC8vICM1NlxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnR9IGZyb20gJy4vaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50IF0sXG4gIGV4cG9ydHM6IFsgSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgSGlnaGNoYXJ0c0NoYXJ0TW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIk5nWm9uZSIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXFCRSxrQ0FDVSxJQUNBOztZQURBLE9BQUUsR0FBRixFQUFFO1lBQ0YsVUFBSyxHQUFMLEtBQUs7Z0NBUFUsSUFBSUEsaUJBQVksQ0FBVSxJQUFJLENBQUM7aUNBQzlCLElBQUlBLGlCQUFZLEVBQW9CO1NBTzFEOzs7OztRQUVKLDhDQUFXOzs7O1lBQVgsVUFBWSxPQUFzQjtnQkFDaEMscUJBQU0sTUFBTSxHQUFHLE9BQU8sY0FBVyxPQUFPLFdBQVEsWUFBWSxDQUFDO2dCQUM3RCxJQUFJLE9BQU8sZUFBWSxNQUFNLEVBQUU7b0JBQzdCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO29CQUNsQyxJQUFJLE1BQU0sRUFBRTt3QkFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDL0I7aUJBQ0Y7YUFDRjs7OztRQUVELDZEQUEwQjs7O1lBQTFCO2dCQUFBLGlCQVFDOztnQkFQQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7cUJBQzNCLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztpQkFDNUI7YUFDRjs7OztRQUVELHNEQUFtQjs7O1lBQW5CO2dCQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQztpQkFDL0Q7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBQyxJQUFJLENBQUMsVUFBaUIsR0FBRSxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxDQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUM5QixDQUFDOztvQkFHRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7Ozs7UUFFRCw4Q0FBVzs7O1lBQVg7O2dCQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7b0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Y7O29CQS9ERkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxFQUFFO3FCQUNiOzs7Ozt3QkFObUJDLGVBQVU7d0JBQTBDQyxXQUFNOzs7O21DQVEzRUMsVUFBSzt3Q0FDTEEsVUFBSzt5Q0FDTEEsVUFBSztpQ0FDTEEsVUFBSzswQ0FDTEEsVUFBSztnQ0FDTEEsVUFBSzsrQkFDTEEsVUFBSztxQ0FFTEMsV0FBTTtzQ0FDTkEsV0FBTTs7dUNBakJUOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTt3QkFDMUMsT0FBTyxFQUFFLENBQUUsd0JBQXdCLENBQUU7cUJBQ3RDOzs7O29DQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=