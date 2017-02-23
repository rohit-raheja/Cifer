//actions.js file 
function frmDashboardflxHamburgerEncryptOnClickKA(eventobject) {
    return AS_FlexContainer_846c1bc8ff67422aa47edfe694514702(eventobject);
}

function AS_FlexContainer_846c1bc8ff67422aa47edfe694514702(eventobject) {
    function MOVE_ACTION____33c3a034dc954fe8b8e37059a0530de1_Callback() {}

    function MOVE_ACTION____7089206971d1430d8190074d51da0e8d_Callback() {}
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
        "animationEnd": MOVE_ACTION____7089206971d1430d8190074d51da0e8d_Callback
    });
    frmDashboardKA.flxHamburgerEncryptKA.animate(kony.ui.createAnimation({
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
        "animationEnd": MOVE_ACTION____33c3a034dc954fe8b8e37059a0530de1_Callback
    });
}

function frmDashboardflxTabCipherKA(eventobject) {
    return AS_FlexContainer_9874b899832248679f396810b8caf47f(eventobject);
}

function AS_FlexContainer_9874b899832248679f396810b8caf47f(eventobject) {
    frmDashboardKA.fmDashboardTabCreateLineKA.isVisible = false;
    frmDashboardKA.frmDashboardTabCipherLineKA.isVisible = true;
    frmDashboardKA.flxCreateKA.isVisible = false;
}

function frmDashboardflxTabCreateOnlickKA(eventobject) {
    return AS_FlexContainer_22dc37c44149424182e5e986e82d5060(eventobject);
}

function AS_FlexContainer_22dc37c44149424182e5e986e82d5060(eventobject) {
    frmDashboardKA.fmDashboardTabCreateLineKA.isVisible = true;
    frmDashboardKA.frmDashboardTabCipherLineKA.isVisible = false;
    frmDashboardKA.flxCreateKA.isVisible = true;
}