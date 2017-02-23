function addWidgetsfrmDecryptionKA() {
    frmDecryptionKA.setDefaultUnit(kony.flex.DP);
    frmDecryptionKA.add();
};

function frmDecryptionKAGlobals() {
    frmDecryptionKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDecryptionKA,
        "enabledForIdleTimeout": false,
        "id": "frmDecryptionKA",
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
    frmDecryptionKA.info = {
        "kuid": "1f62a08479034cd4b6f872d4bb27a497"
    };
};