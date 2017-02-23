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
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmEncryptionKA.info = {
        "kuid": "45599af0ad23401787296d1efa311333"
    };
};