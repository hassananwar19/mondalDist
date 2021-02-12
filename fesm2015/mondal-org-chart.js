import { CommonModule } from '@angular/common';
import { EventEmitter, Component, Input, Output, HostBinding, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmployeeComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrgChartComponent {
    constructor() {
        this.hasManager = false;
        this.direction = 'vertical';
        this.itemClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get hostClass() {
        return this.direction === 'vertical' ? 'column' : '';
    }
}
OrgChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mui-org-chart',
                template: "<mui-employee *ngIf=\"topEmployee\" ngClass=\"mui-oc-{{direction}}\" [employee]=\"topEmployee\" [hasManager]=\"hasManager\"\n  [direction]=\"direction\" (itemClick)=\"itemClick.emit($event)\">\n</mui-employee>\n<div *ngIf=\"topEmployee?.subordinates?.length\" ngClass=\"mui-oc-reports-{{direction}}\" class=\"mui-oc-reports\">\n  <ng-container *ngFor=\"let employee of topEmployee?.subordinates; first as isFirst; last as isLast\">\n    <div ngClass=\"mui-oc-org-container-{{direction}}\" class=\"mui-oc-org-container\">\n      <div ngClass=\"mui-oc-connector-container-{{direction}}\" class=\"mui-oc-connector-container\">\n        <div class=\"mui-oc-connector mui-oc-border\" [style.border-color]=\"isFirst?'transparent':''\"></div>\n        <div class=\"mui-oc-border\"></div>\n        <div class=\"mui-oc-connector mui-oc-border\" [style.border-color]=\"isLast?'transparent':''\"></div>\n      </div>\n      <mui-org-chart [topEmployee]=\"employee\" [hasManager]=\"true\" [direction]=\"direction\"\n        (itemClick)=\"itemClick.emit($event)\">\n      </mui-org-chart>\n    </div>\n  </ng-container>\n</div>",
                styles: [":host{display:flex;align-items:center;flex:1}.mui-oc-vertical{flex-direction:column}.mui-oc-org-container{display:flex}.mui-oc-org-container-vertical{flex-direction:column}.mui-oc-connector{flex:1}.mui-oc-connector-container{display:flex}.mui-oc-connector-container-horizontal{flex-direction:column}.mui-oc-reports{display:flex;flex:1}.mui-oc-reports-horizontal{flex-direction:column}"]
            }] }
];
OrgChartComponent.propDecorators = {
    topEmployee: [{ type: Input }],
    hasManager: [{ type: Input }],
    direction: [{ type: Input }],
    itemClick: [{ type: Output }],
    hostClass: [{ type: HostBinding, args: ['style.flex-direction',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrgChartModule {
}
OrgChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OrgChartComponent, EmployeeComponent],
                imports: [
                    CommonModule
                ],
                exports: [OrgChartComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OrgChartModule, OrgChartComponent as ɵa, EmployeeComponent as ɵb };
//# sourceMappingURL=mondal-org-chart.js.map
