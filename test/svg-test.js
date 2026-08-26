import {suite} from "./run.js";
import * as svg from "../svg.js";


suite({
    name: "SVG Test Suite",

    testThatAllElementsHaveMethod() {

        svg.a()
        svg.animate()
        svg.animateColor()
        svg.animateMotion()
        svg.animateTransform()
        svg.circle()
        svg.clipPath()
        svg.defs()
        svg.desc()
        svg.ellipse()
        svg.feBlend()
        svg.feColorMatrix()
        svg.feComponentTransfer()
        svg.feComposite()
        svg.feConvolveMatrix()
        svg.feDiffuseLighting()
        svg.feDisplacementMap()
        svg.feDistantLight()
        svg.feDropShadow()
        svg.feFlood()
        svg.feFuncA()
        svg.feFuncB()
        svg.feFuncG()
        svg.feFuncR()
        svg.feGaussianBlur()
        svg.feImage()
        svg.feMerge()
        svg.feMergeNode()
        svg.feMorphology()
        svg.feOffset()
        svg.fePointLight()
        svg.feSpecularLighting()
        svg.feSpotLight()
        svg.feTile()
        svg.feTurbulence()
        svg.filter()
        svg.foreignObject()
        svg.g()
        svg.image()
        svg.line()
        svg.linearGradient()
        svg.marker()
        svg.mask()
        svg.metadata()
        svg.mpath()
        svg.path()
        svg.pattern()
        svg.polygon()
        svg.polyline()
        svg.radialGradient()
        svg.rect()
        svg.script()
        svg.setElement()
        svg.stop()
        svg.style()
        svg.svg()
        svg.switchElement()
        svg.symbol()
        svg.text()
        svg.textPath()
        svg.title()
        svg.tspan()
        svg.use()
        svg.view()

    },

    testThatAllAttributesAreSupported() {

        const el = svg.svg()

        el.cx()
    }

})
