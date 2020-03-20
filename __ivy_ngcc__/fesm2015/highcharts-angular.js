import { Component, ElementRef, EventEmitter, Input, Output, NgZone, NgModule } from '@angular/core';
import 'highcharts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
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
HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) { return new (t || HighchartsChartComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
HighchartsChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HighchartsChartComponent, selectors: [["highcharts-chart"]], inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function HighchartsChartComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HighchartsChartComponent, [{
        type: Component,
        args: [{
                selector: 'highcharts-chart',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { updateChange: [{
            type: Output
        }], chartInstance: [{
            type: Output
        }], Highcharts: [{
            type: Input
        }], constructorType: [{
            type: Input
        }], callbackFunction: [{
            type: Input
        }], oneToOne: [{
            type: Input
        }], runOutsideAngular: [{
            type: Input
        }], options: [{
            type: Input
        }], update: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HighchartsChartModule {
}
HighchartsChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HighchartsChartModule });
HighchartsChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HighchartsChartModule_Factory(t) { return new (t || HighchartsChartModule)(); } });
/** @nocollapse */
HighchartsChartModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HighchartsChartModule, { declarations: [HighchartsChartComponent], exports: [HighchartsChartComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HighchartsChartModule, [{
        type: NgModule,
        args: [{
                declarations: [HighchartsChartComponent],
                exports: [HighchartsChartComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { HighchartsChartModule, HighchartsChartComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5kdW5uL0dpdCBSZXBvc2l0b3JpZXMvcmVwb3J0ZXItZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oaWdoY2hhcnRzLWFuZ3VsYXIvZmVzbTIwMTUvaGlnaGNoYXJ0cy1hbmd1bGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrakJBTUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs0SkFNRTtBQUNGO0FBQ0E7Ozs7Ozs7OzBCQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE5nWm9uZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnaGlnaGNoYXJ0cyc7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmNsYXNzIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBlbFxuICAgICAqIEBwYXJhbSB7P30gX3pvbmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCwgX3pvbmUgLy8gIzc1XG4gICAgKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fem9uZSA9IF96b25lO1xuICAgICAgICB0aGlzLnVwZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2hhcnRJbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdXBkYXRlID0gY2hhbmdlc1tcInVwZGF0ZVwiXSAmJiBjaGFuZ2VzW1widXBkYXRlXCJdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKGNoYW5nZXNbXCJvcHRpb25zXCJdIHx8IHVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVkVXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhbmdlLmVtaXQoZmFsc2UpOyAvLyBjbGVhciB0aGUgZmxhZyBhZnRlciB1cGRhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHdyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCkge1xuICAgICAgICAvLyAjNzVcbiAgICAgICAgaWYgKHRoaXMucnVuT3V0c2lkZUFuZ3VsYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0ICYmIHRoaXMuY2hhcnQudXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSh0aGlzLm9wdGlvbnMsIHRydWUsIHRoaXMub25lVG9PbmUgfHwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9ICgvKiogQHR5cGUgez99ICovICh0aGlzLkhpZ2hjaGFydHMpKVt0aGlzLmNvbnN0cnVjdG9yVHlwZSB8fCAnY2hhcnQnXSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucywgdGhpcy5jYWxsYmFja0Z1bmN0aW9uIHx8IG51bGwpO1xuICAgICAgICAgICAgLy8gZW1pdCBjaGFydCBpbnN0YW5jZSBvbiBpbml0XG4gICAgICAgICAgICB0aGlzLmNoYXJ0SW5zdGFuY2UuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvLyAjNDRcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHsgLy8gIzU2XG4gICAgICAgICAgICAvLyAjNTZcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5IaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hpZ2hjaGFydHMtY2hhcnQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnJ1xuICAgICAgICAgICAgfV0gfVxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogRWxlbWVudFJlZiwgfSxcbiAgICB7IHR5cGU6IE5nWm9uZSwgfSxcbl07XG5IaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgXCJIaWdoY2hhcnRzXCI6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICBcImNvbnN0cnVjdG9yVHlwZVwiOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgXCJjYWxsYmFja0Z1bmN0aW9uXCI6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICBcIm9uZVRvT25lXCI6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICBcInJ1bk91dHNpZGVBbmd1bGFyXCI6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICBcIm9wdGlvbnNcIjogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgIFwidXBkYXRlXCI6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICBcInVwZGF0ZUNoYW5nZVwiOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgIFwiY2hhcnRJbnN0YW5jZVwiOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxufTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuY2xhc3MgSGlnaGNoYXJ0c0NoYXJ0TW9kdWxlIHtcbn1cbkhpZ2hjaGFydHNDaGFydE1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50XSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBbSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50XVxuICAgICAgICAgICAgfSxdIH1cbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkhpZ2hjaGFydHNDaGFydE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtdO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cblxuZXhwb3J0IHsgSGlnaGNoYXJ0c0NoYXJ0TW9kdWxlLCBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgfTtcbiJdfQ==