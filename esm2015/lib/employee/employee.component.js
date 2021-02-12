/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class EmployeeComponent {
    constructor() {
        this.hasManager = false;
        this.direction = 'vertical';
        this.itemClick = new EventEmitter();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vbmRhbC9vcmctY2hhcnQvIiwic291cmNlcyI6WyJsaWIvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3ZFLE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFRVyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBRWpELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBQ3RELENBQUM7OztZQVpBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsdXJCQUF3Qzs7YUFFekM7Ozt1QkFHRSxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFFTCxNQUFNOzs7O0lBSlAscUNBQTZCOztJQUM3Qix1Q0FBNEI7O0lBQzVCLHNDQUEyRDs7SUFFM0Qsc0NBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSUVtcGxveWVlIH0gZnJvbSAnLi4vZW1wbG95ZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdWktZW1wbG95ZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1wbG95ZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbXBsb3llZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBlbXBsb3llZTogSUVtcGxveWVlO1xuICBASW5wdXQoKSBoYXNNYW5hZ2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgQE91dHB1dCgpIGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8SUVtcGxveWVlPigpO1xufVxuIl19