import { Component, ElementRef, EventEmitter, Input, Output, NgZone, NgModule } from '@angular/core';
import 'highcharts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HighchartsChartComponent {
    /**
     * @param {?} el
     * @param {?} _zone
     */
    constructor(el, _zone // #75
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
    ngOnChanges(changes) {
        const /** @type {?} */ update = changes["update"] && changes["update"].currentValue;
        if (changes["options"] || update) {
            this.wrappedUpdateOrCreateChart();
            if (update) {
                this.updateChange.emit(false); // clear the flag after update
            }
        }
    }
    /**
     * @return {?}
     */
    wrappedUpdateOrCreateChart() {
        // #75
        if (this.runOutsideAngular) {
            this._zone.runOutsideAngular(() => {
                this.updateOrCreateChart();
            });
        }
        else {
            this.updateOrCreateChart();
        }
    }
    /**
     * @return {?}
     */
    updateOrCreateChart() {
        if (this.chart && this.chart.update) {
            this.chart.update(this.options, true, this.oneToOne || false);
        }
        else {
            this.chart = (/** @type {?} */ (this.Highcharts))[this.constructorType || 'chart'](this.el.nativeElement, this.options, this.callbackFunction || null);
            // emit chart instance on init
            this.chartInstance.emit(this.chart);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // #44
        if (this.chart) { // #56
            // #56
            this.chart.destroy();
            this.chart = null;
        }
    }
}
HighchartsChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'highcharts-chart',
                template: ''
            }] }
];
/** @nocollapse */
HighchartsChartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HighchartsChartModule {
}
HighchartsChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HighchartsChartComponent],
                exports: [HighchartsChartComponent]
            },] }
];
/** @nocollapse */
HighchartsChartModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { HighchartsChartModule, HighchartsChartComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoaWdoY2hhcnRzLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgSGlnaGNoYXJ0czogdHlwZW9mIEhpZ2hjaGFydHM7XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBIaWdoY2hhcnRzLkNoYXJ0Q2FsbGJhY2tGdW5jdGlvbjtcbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuICBASW5wdXQoKSBydW5PdXRzaWRlQW5ndWxhcjogYm9vbGVhbjsgLy8gIzc1XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEhpZ2hjaGFydHMuT3B0aW9ucztcbiAgQElucHV0KCkgdXBkYXRlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICBAT3V0cHV0KCkgY2hhcnRJbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXI8SGlnaGNoYXJ0cy5DaGFydD4oKTsgLy8gIzI2XG5cbiAgcHJpdmF0ZSBjaGFydDogSGlnaGNoYXJ0cy5DaGFydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSAvLyAjNzVcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB1cGRhdGUgPSBjaGFuZ2VzLnVwZGF0ZSAmJiBjaGFuZ2VzLnVwZGF0ZS5jdXJyZW50VmFsdWU7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCB1cGRhdGUpIHtcbiAgICAgIHRoaXMud3JhcHBlZFVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFuZ2UuZW1pdChmYWxzZSk7IC8vIGNsZWFyIHRoZSBmbGFnIGFmdGVyIHVwZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCkgeyAvLyAjNzVcbiAgICBpZiAodGhpcy5ydW5PdXRzaWRlQW5ndWxhcikge1xuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3JDcmVhdGVDaGFydCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCAmJiB0aGlzLmNoYXJ0LnVwZGF0ZSkge1xuICAgICAgdGhpcy5jaGFydC51cGRhdGUodGhpcy5vcHRpb25zLCB0cnVlLCB0aGlzLm9uZVRvT25lIHx8IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydCA9ICh0aGlzLkhpZ2hjaGFydHMgYXMgYW55KVt0aGlzLmNvbnN0cnVjdG9yVHlwZSB8fCAnY2hhcnQnXShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuXG4gICAgICAvLyBlbWl0IGNoYXJ0IGluc3RhbmNlIG9uIGluaXRcbiAgICAgIHRoaXMuY2hhcnRJbnN0YW5jZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyAvLyAjNDRcbiAgICBpZiAodGhpcy5jaGFydCkgeyAgLy8gIzU2XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hpZ2hjaGFydHNDaGFydENvbXBvbmVudH0gZnJvbSAnLi9oaWdoY2hhcnRzLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgXSxcbiAgZXhwb3J0czogWyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFPYSx3QkFBd0I7Ozs7O0lBY25DLFlBQ1UsSUFDQTs7UUFEQSxPQUFFLEdBQUYsRUFBRTtRQUNGLFVBQUssR0FBTCxLQUFLOzRCQVBVLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQzs2QkFDOUIsSUFBSSxZQUFZLEVBQW9CO0tBTzFEOzs7OztJQUVKLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyx1QkFBTSxNQUFNLEdBQUcsT0FBTyxjQUFXLE9BQU8sV0FBUSxZQUFZLENBQUM7UUFDN0QsSUFBSSxPQUFPLGVBQVksTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2xDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7S0FDRjs7OztJQUVELDBCQUEwQjs7UUFDeEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7Ozs7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQUMsSUFBSSxDQUFDLFVBQWlCLEdBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FDOUIsQ0FBQzs7WUFHRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7S0FDRjs7OztJQUVELFdBQVc7O1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBTm1CLFVBQVU7WUFBMEMsTUFBTTs7OzJCQVEzRSxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUVMLE1BQU07OEJBQ04sTUFBTTs7Ozs7OztBQ2pCVCxNQU9hLHFCQUFxQjs7O1lBSmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDMUMsT0FBTyxFQUFFLENBQUUsd0JBQXdCLENBQUU7YUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9