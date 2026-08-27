import {assert, output, suite} from "./run.js";
import {state, transform} from "../mvc.js";
import {get} from "../io.js";
import {div} from "../html.js";

suite({

    name: "IO test suite",

    async Get_request_should_set_response_to_output_state() {
        let testState = state()
        get("data.json", testState).observeUrl()
        output("Test state: ", testState.numericField)
        await assert(() => 40 === testState.numericField.get())
    },

    async Get_request_output_should_properly_transform() {
        let testState = state()
        let transformedState = transform(testState, value => value?.numericField * 10)
        get("data.json", testState).observeUrl()
        output(
            div("Test state: ", testState.numericField),
            div("Transformed state: ", transformedState)
        )
        await assert(() => 400 === transformedState.get())
    }

})
