import {assertEquals, output, suite} from "./run.js";
import {state} from "../mvc.js";
import {get} from "../io.js";

suite({

    name: "MVC test suite",

    testState() {
        let testState = state()
        get("data.json", testState).observeUrl()
        output("Test state: ", testState.numericField)
        assertEquals(40, testState.numericField.get())
    },

})
