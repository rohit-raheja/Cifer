//actions.js file 
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

function frmDashboardFlxHamburgerBackOnClickKA(eventobject) {
    return AS_FlexContainer_65aa44c1708541ef9a1ca6d8e1f0413f(eventobject);
}

function AS_FlexContainer_65aa44c1708541ef9a1ca6d8e1f0413f(eventobject) {
    function MOVE_ACTION____ec63ac569a91460f85dcf7f9a8377ab4_Callback() {}

    function MOVE_ACTION____dfe43e8a6a29483a8cb075cf2126ec7b_Callback() {}
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
        "animationEnd": MOVE_ACTION____dfe43e8a6a29483a8cb075cf2126ec7b_Callback
    });
    undefined["isVisible"] = false;
    frmDashboardKA.flxHamburgerMenuKA.animate(kony.ui.createAnimation({
        "100": {
            "left": "-80%",
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
        "animationEnd": MOVE_ACTION____ec63ac569a91460f85dcf7f9a8377ab4_Callback
    });
}

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