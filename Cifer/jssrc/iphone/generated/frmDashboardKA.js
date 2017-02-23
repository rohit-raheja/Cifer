function addWidgetsfrmDashboardKA() {
    frmDashboardKA.setDefaultUnit(kony.flex.DP);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainKA.setDefaultUnit(kony.flex.DP);
    var flxHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknDefaultHeaderKA",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderKA.setDefaultUnit(kony.flex.DP);
    var flxHamburgerKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHamburgerKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "onClick": AS_FlexContainer_246243f065f04b1b87c8b72cd58706f2,
        "skin": "sknPlainSkinKA",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerKA.setDefaultUnit(kony.flex.DP);
    var flxHamburgerLine1KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHamburgerLine1KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknWhiteFlexKA",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerLine1KA.setDefaultUnit(kony.flex.DP);
    flxHamburgerLine1KA.add();
    var flxHamburgerLine2KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHamburgerLine2KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknWhiteFlexKA",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerLine2KA.setDefaultUnit(kony.flex.DP);
    flxHamburgerLine2KA.add();
    var flxHamburgerLine3KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHamburgerLine3KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknWhiteFlexKA",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerLine3KA.setDefaultUnit(kony.flex.DP);
    flxHamburgerLine3KA.add();
    flxHamburgerKA.add(flxHamburgerLine1KA, flxHamburgerLine2KA, flxHamburgerLine3KA);
    var lbDashboardHeaderKA = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lbDashboardHeaderKA",
        "isVisible": true,
        "skin": "sknLblffffff60OSSBIKA",
        "text": "Dashboard",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxHamburgerbackKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHamburgerbackKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "onClick": AS_FlexContainer_5a833019d34e45d7ab52b17d8049ccc2,
        "skin": "sknPlainSkinKA",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerbackKA.setDefaultUnit(kony.flex.DP);
    var flxHamburgerbackflx1KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHamburgerbackflx1KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknWhiteFlexKA",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerbackflx1KA.setDefaultUnit(kony.flex.DP);
    flxHamburgerbackflx1KA.add();
    var flxHamburgerbackflx2KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHamburgerbackflx2KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknWhiteFlexKA",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerbackflx2KA.setDefaultUnit(kony.flex.DP);
    flxHamburgerbackflx2KA.add();
    var flxHamburgerbackflx3KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxHamburgerbackflx3KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknWhiteFlexKA",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerbackflx3KA.setDefaultUnit(kony.flex.DP);
    flxHamburgerbackflx3KA.add();
    flxHamburgerbackKA.add(flxHamburgerbackflx1KA, flxHamburgerbackflx2KA, flxHamburgerbackflx3KA);
    flxHeaderKA.add(flxHamburgerKA, lbDashboardHeaderKA, flxHamburgerbackKA);
    flxMainKA.add(flxHeaderKA);
    var flxHamburgerMenuKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHamburgerMenuKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "sknHamburgerMenuKA",
        "top": "0%",
        "width": "0%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerMenuKA.setDefaultUnit(kony.flex.DP);
    var flxHamburgerHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHamburgerHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknPlainSkinKA",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerHeaderKA.setDefaultUnit(kony.flex.DP);
    var lblHamburgerHeaderKA = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblHamburgerHeaderKA",
        "isVisible": true,
        "skin": "sknLblffffff60OSSBIKA",
        "text": "CIFER",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxHamburgerHeaderKA.add(lblHamburgerHeaderKA);
    var flxHamburgerEncryptKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHamburgerEncryptKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknPlainSkinKA",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerEncryptKA.setDefaultUnit(kony.flex.DP);
    var lblHamEncryptionKA = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHamEncryptionKA",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLblffffff48OSSBIKA",
        "text": "Encryption",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgEncryptArrowKA = new kony.ui.Image2({
        "centerY": "60%",
        "height": "30dp",
        "id": "imgEncryptArrowKA",
        "isVisible": true,
        "right": "5%",
        "skin": "sknImgArrowKA",
        "src": "forwardarrow.png",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHamburgerEncryptKA.add(lblHamEncryptionKA, imgEncryptArrowKA);
    var flxHamburgerDecryptKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHamburgerDecryptKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknPlainSkinKA",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerDecryptKA.setDefaultUnit(kony.flex.DP);
    var lblHamDecryptionKA = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHamDecryptionKA",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLblffffff48OSSBIKA",
        "text": "Decryption",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgDecryptArrowKA = new kony.ui.Image2({
        "centerY": "60%",
        "height": "30dp",
        "id": "imgDecryptArrowKA",
        "isVisible": true,
        "right": "5%",
        "skin": "sknImgArrowKA",
        "src": "forwardarrow.png",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHamburgerDecryptKA.add(lblHamDecryptionKA, imgDecryptArrowKA);
    flxHamburgerMenuKA.add(flxHamburgerHeaderKA, flxHamburgerEncryptKA, flxHamburgerDecryptKA);
    frmDashboardKA.add(flxMainKA, flxHamburgerMenuKA);
};

function frmDashboardKAGlobals() {
    frmDashboardKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboardKA,
        "enabledForIdleTimeout": false,
        "id": "frmDashboardKA",
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
    frmDashboardKA.info = {
        "kuid": "8b4c59e117b94ebe8b9523cb6b2517c9"
    };
};