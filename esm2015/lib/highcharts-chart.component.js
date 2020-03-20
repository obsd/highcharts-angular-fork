/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, NgZone, OnChanges, SimpleChanges } from "@angular/core";
import * as Highcharts from "highcharts";
export class HighchartsChartComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxzQkFBc0I7QUFDaEksT0FBTyxLQUFLLFVBQVUsbUJBQW1CO0FBTXpDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBY25DLFlBQ1UsSUFDQTs7UUFEQSxPQUFFLEdBQUYsRUFBRTtRQUNGLFVBQUssR0FBTCxLQUFLOzRCQVBVLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQzs2QkFDOUIsSUFBSSxZQUFZLEVBQW9CO0tBTzFEOzs7OztJQUVKLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyx1QkFBTSxNQUFNLEdBQUcsT0FBTyxjQUFXLE9BQU8sV0FBUSxZQUFZLENBQUM7UUFDN0QsSUFBSSxPQUFPLGVBQVksTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2xDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7S0FDRjs7OztJQUVELDBCQUEwQjs7UUFDeEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO2FBQzNCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtLQUNGOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFDLElBQUksQ0FBQyxVQUFpQixFQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FDOUIsQ0FBQzs7WUFHRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7S0FDRjs7OztJQUVELFdBQVc7O1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUcsTUFBTTs7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtLQUNGOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFObUIsVUFBVTtZQUEwQyxNQUFNOzs7MkJBUTNFLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBRUwsTUFBTTs4QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgTmdab25lLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hpZ2hjaGFydHMtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBIaWdoY2hhcnRzOiB0eXBlb2YgSGlnaGNoYXJ0cztcbiAgQElucHV0KCkgY29uc3RydWN0b3JUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrRnVuY3Rpb246IEhpZ2hjaGFydHMuQ2hhcnRDYWxsYmFja0Z1bmN0aW9uO1xuICBASW5wdXQoKSBvbmVUb09uZTogYm9vbGVhbjsgLy8gIzIwXG4gIEBJbnB1dCgpIHJ1bk91dHNpZGVBbmd1bGFyOiBib29sZWFuOyAvLyAjNzVcbiAgQElucHV0KCkgb3B0aW9uczogSGlnaGNoYXJ0cy5PcHRpb25zO1xuICBASW5wdXQoKSB1cGRhdGU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHVwZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjaGFydEluc3RhbmNlID0gbmV3IEV2ZW50RW1pdHRlcjxIaWdoY2hhcnRzLkNoYXJ0PigpOyAvLyAjMjZcblxuICBwcml2YXRlIGNoYXJ0OiBIaWdoY2hhcnRzLkNoYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lIC8vICM3NVxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHVwZGF0ZSA9IGNoYW5nZXMudXBkYXRlICYmIGNoYW5nZXMudXBkYXRlLmN1cnJlbnRWYWx1ZTtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IHVwZGF0ZSkge1xuICAgICAgdGhpcy53cmFwcGVkVXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoYW5nZS5lbWl0KGZhbHNlKTsgLy8gY2xlYXIgdGhlIGZsYWcgYWZ0ZXIgdXBkYXRlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlZFVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKSB7IC8vICM3NVxuICAgIGlmICh0aGlzLnJ1bk91dHNpZGVBbmd1bGFyKSB7XG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPckNyZWF0ZUNoYXJ0KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0ICYmIHRoaXMuY2hhcnQudXBkYXRlKSB7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSh0aGlzLm9wdGlvbnMsIHRydWUsIHRoaXMub25lVG9PbmUgfHwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gKHRoaXMuSGlnaGNoYXJ0cyBhcyBhbnkpW3RoaXMuY29uc3RydWN0b3JUeXBlIHx8ICdjaGFydCddKFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uIHx8IG51bGxcbiAgICAgICk7XG5cbiAgICAgIC8vIGVtaXQgY2hhcnQgaW5zdGFuY2Ugb24gaW5pdFxuICAgICAgdGhpcy5jaGFydEluc3RhbmNlLmVtaXQodGhpcy5jaGFydCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IC8vICM0NFxuICAgIGlmICh0aGlzLmNoYXJ0KSB7ICAvLyAjNTZcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=