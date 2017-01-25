"use strict";
var PreventUnsavedChanges = (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    };
    return PreventUnsavedChanges;
}());
exports.PreventUnsavedChanges = PreventUnsavedChanges;
//# sourceMappingURL=prevent-unsaved-changes-guard.service.js.map