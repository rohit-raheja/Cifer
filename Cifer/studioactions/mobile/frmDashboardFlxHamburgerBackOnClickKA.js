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