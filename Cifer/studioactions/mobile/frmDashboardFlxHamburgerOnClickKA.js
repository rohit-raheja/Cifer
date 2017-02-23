function frmDashboardFlxHamburgerOnClickKA(eventobject) {
    return AS_FlexContainer_246243f065f04b1b87c8b72cd58706f2(eventobject);
}

function AS_FlexContainer_246243f065f04b1b87c8b72cd58706f2(eventobject) {
    function SCALE_ACTION____995cb9f0b2914dbfa716aec19d56c44d_Callback() {}

    function MOVE_ACTION____d4d6d9ad176a4fff919619384fb288f5_Callback() {}
    frmDashboardKA.flxHeaderKA.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____d4d6d9ad176a4fff919619384fb288f5_Callback
    });
    frmDashboardKA.flxHamburgerMenuKA.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "80%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": SCALE_ACTION____995cb9f0b2914dbfa716aec19d56c44d_Callback
    });
    frmDashboardKA.flxHamburgerbackKA["isVisible"] = true;
}