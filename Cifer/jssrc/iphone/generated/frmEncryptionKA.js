function addWidgetsfrmEncryptionKA() {
    frmEncryptionKA.setDefaultUnit(kony.flex.DP);
    frmEncryptionKA.add();
};

function frmEncryptionKAGlobals() {
    frmEncryptionKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEncryptionKA,
        "enabledForIdleTimeout": false,
        "id": "frmEncryptionKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknDefaultForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    frmEncryptionKA.info = {
        "kuid": "45599af0ad23401787296d1efa311333"
    };
};