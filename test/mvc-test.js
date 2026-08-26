import {assertEquals, output, suite} from "./run.js";
import {state, transform} from "../mvc.js";

suite({

    name: "MVC test suite",

    testState() {
        let testState = state()
        testState.set(3)
        output("Test state: ", testState)
        assertEquals(3, testState.get())
    },

    testTransform() {
        let sourceState = state()
        let transformedState = transform(sourceState, value => value + 10)
        output("Transformed state: ", transformedState)
        sourceState.set(3)
        assertEquals(13, transformedState.get())
    }
})
