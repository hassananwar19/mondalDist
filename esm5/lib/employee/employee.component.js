/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.hasManager = false;
        this.direction = 'vertical';
        this.itemClick = new EventEmitter();
    }
    EmployeeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mui-employee',
                    template: "<div ngClass=\"mui-oc-connector-{{direction}}\" class=\"mui-oc-border\" *ngIf=\"hasManager\"></div>\n<div [ngClass]=\"employee?.cssClass\" class=\"mui-oc-box mui-oc-border mui-oc-background\"\n  (click)=\"itemClick.emit(employee)\">\n  <div *ngIf=\"employee?.imageUrl\" class=\"mui-oc-image mui-oc-border\"\n    [ngStyle]=\"{ 'background-image': 'url(\\''+ employee?.imageUrl+'\\')'}\"></div>\n  <div>\n    <div class=\"mui-oc-designation\">{{employee?.designation}}</div>\n    <div class=\"mui-oc-name\" [innerHTML]=\"employee?.name\"></div>\n  </div>\n</div>\n<div ngClass=\"mui-oc-connector-{{direction}}\" class=\"mui-oc-border\" *ngIf=\"employee?.subordinates?.length\"></div>\n",
                    styles: [":host{display:flex;align-items:center}.mui-oc-box{cursor:pointer;display:flex;align-items:center}"]
                }] }
    ];
    EmployeeComponent.propDecorators = {
        employee: [{ type: Input }],
        hasManager: [{ type: Input }],
        direction: [{ type: Input }],
        itemClick: [{ type: Output }]
    };
    return EmployeeComponent;
}());
export { EmployeeComponent };
if (false) {
    /** @type {?} */
    EmployeeComponent.prototype.employee;
    /** @type {?} */
    EmployeeComponent.prototype.hasManager;
    /** @type {?} */
    EmployeeComponent.prototype.direction;
    /** @type {?} */
    EmployeeComponent.prototype.itemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vbmRhbC9vcmctY2hhcnQvIiwic291cmNlcyI6WyJsaWIvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFO0lBQUE7UUFRVyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBRWpELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBQ3RELENBQUM7O2dCQVpBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsdXJCQUF3Qzs7aUJBRXpDOzs7MkJBR0UsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBRUwsTUFBTTs7SUFDVCx3QkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLGlCQUFpQjs7O0lBRTVCLHFDQUE2Qjs7SUFDN0IsdUNBQTRCOztJQUM1QixzQ0FBMkQ7O0lBRTNELHNDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElFbXBsb3llZSB9IGZyb20gJy4uL2VtcGxveWVlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXVpLWVtcGxveWVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VtcGxveWVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW1wbG95ZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZW1wbG95ZWU6IElFbXBsb3llZTtcbiAgQElucHV0KCkgaGFzTWFuYWdlciA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAndmVydGljYWwnO1xuXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPElFbXBsb3llZT4oKTtcbn1cbiJdfQ==