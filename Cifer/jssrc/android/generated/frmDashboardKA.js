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
        "height": "8%",
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
        "skin": "sknPlainSkinKA",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxHamburgerKA.setDefaultUnit(kony.flex.DP);
    var lblHamburgerLineKA = new kony.ui.Label({
        "height": "15%",
        "id": "lblHamburgerLineKA",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblwhiteLineKA",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblHamburgerLine2KA = new kony.ui.Label({
        "height": "15%",
        "id": "lblHamburgerLine2KA",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblwhiteLineKA",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblHamburgerLine3KA = new kony.ui.Label({
        "height": "15%",
        "id": "lblHamburgerLine3KA",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblwhiteLineKA",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblHamburgerLine4KA = new kony.ui.Label({
        "height": "15%",
        "id": "lblHamburgerLine4KA",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblwhiteLineKA",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHamburgerKA.add(lblHamburgerLineKA, lblHamburgerLine2KA, lblHamburgerLine3KA, lblHamburgerLine4KA);
    var lbDashboardHeaderKA = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lbDashboardHeaderKA",
        "isVisible": true,
        "skin": "sknLblffffff60OSSBIKA",
        "text": "Dashboard",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeaderKA.add(flxHamburgerKA, lbDashboardHeaderKA);
    flxMainKA.add(flxHeaderKA);
    var flxHamburgerMenuKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHamburgerMenuKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-80%",
        "skin": "sknHamburgerMenuKA",
        "top": "0%",
        "width": "80%",
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "onClick": AS_FlexContainer_846c1bc8ff67422aa47edfe694514702,
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmDashboardKA.info = {
        "kuid": "8b4c59e117b94ebe8b9523cb6b2517c9"
    };
};