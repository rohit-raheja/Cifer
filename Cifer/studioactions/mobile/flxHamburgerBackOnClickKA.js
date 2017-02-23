function flxHamburgerBackOnClickKA(eventobject) {
    return AS_FlexContainer_5a833019d34e45d7ab52b17d8049ccc2(eventobject);
}

function AS_FlexContainer_5a833019d34e45d7ab52b17d8049ccc2(eventobject) {
    function SCALE_ACTION____f0e31b3a233343499c40f0410e98246b_Callback() {}

    function ___ide_onClick_5bf460e1015b4d399795c5ed6ddcad76_Callback() {}
    frmDashboardKA.flxHamburgerbackKA["isVisible"] = false;
    frmDashboardKA.flxHeaderKA.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
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
        "animationEnd": ___ide_onClick_5bf460e1015b4d399795c5ed6ddcad76_Callback
    });
    frmDashboardKA.flxHamburgerMenuKA.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "0%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": SCALE_ACTION____f0e31b3a233343499c40f0410e98246b_Callback
    });
}