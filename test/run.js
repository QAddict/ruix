import rules from "./suite.css" with { type: "css" };
document.adoptedStyleSheets = [rules];

export function suite(def) {
    Object
        .entries(def)
        .filter(testMethods)
        .flatMap(testCases(def))
        .map(runTestCase)
        .forEach(report(def));
}

function testMethods(entry) {
    return entry[1] instanceof Function
}

function testCases(def) {
    return ([name, value]) => {
        let data = def[name + "Data"]
        return Array.isArray(data) ? data.map(row => testCases(name, value, row)) : [testCase(name, value, data)]
    }
}

function testCase(name, scenario, parameters) {
    return {
        name: name,
        parameters: parameters,
        run() {
            if(Array.isArray(parameters)) scenario(...parameters)
            else scenario(parameters)
        }
    }
}

function runTestCase(testCase) {
    testCase.start = new Date()
    try {
        testCase.run()
    } catch (error) {
        testCase.error = error
    }
    testCase.end = new Date()
    return testCase
}

function report(def) {
    let s = document.body.appendChild(document.createElement("div"))
    s.appendChild(document.createElement("h1")).appendChild(document.createTextNode(def.name))
    let tb = s.appendChild(document.createElement("table")).appendChild(document.createElement("tbody"))
    let thr = tb.appendChild(document.createElement("tr"))
    thr.appendChild(document.createElement("th")).appendChild(document.createTextNode("TestCase"))
    thr.appendChild(document.createElement("th")).appendChild(document.createTextNode("Parameters"))
    thr.appendChild(document.createElement("th")).appendChild(document.createTextNode("Result"))
    thr.appendChild(document.createElement("th")).appendChild(document.createTextNode("Start"))
    thr.appendChild(document.createElement("th")).appendChild(document.createTextNode("End"))
    thr.appendChild(document.createElement("th")).appendChild(document.createTextNode("Error"))
    return testCase => {
        let t = tb.appendChild(document.createElement("tr"))
        t.appendChild(document.createElement("td")).appendChild(document.createTextNode(testCase.name))
        t.appendChild(document.createElement("td")).appendChild(document.createTextNode(testCase.parameters || ""))
        t.appendChild(document.createElement("td")).appendChild(document.createTextNode(testCase.error ? "failed" : "passed"))
        t.appendChild(document.createElement("td")).appendChild(document.createTextNode(testCase.start))
        t.appendChild(document.createElement("td")).appendChild(document.createTextNode(testCase.end))
        t.appendChild(document.createElement("td")).appendChild(document.createTextNode(testCase.error))
        t.setAttribute("class", testCase.error ? "failed" : "passed")
    }
}

export function assertEquals(expected, actual) {
    if(expected !== actual) throw new Error("Expected: " + expected + " to be equal to: " + actual + " but not equal.")
}
