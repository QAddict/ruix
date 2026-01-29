/*
 * Copyright (c) 2026-2026 Ondrej Fischer
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {ElementBuilder, transform, set, stateModel, to} from "./mvc.js";

/**
 * HtmlBuilder is a class that assists in constructing HTML elements and setting their attributes and styles.
 * It extends the ElementBuilder class and provides various methods to set attributes, CSS properties,
 * and add classes to the HTML elements.
 */
export class SvgBuilder extends ElementBuilder {
    constructor(node) {
        super(node);
    }

    name(...value) {
        return this.set('name', ...value)
    }

    accumulate(...value) {
        return this.set('accumulate', ...value)
    }

    additive(...value) {
        return this.set('additive', ...value)
    }

    alignmentBaseline(...value) {
        return this.set('alignment-baseline', ...value)
    }

    amplitude(...value) {
        return this.set('amplitude', ...value)
    }

    attributeName(...value) {
        return this.set('attributeName', ...value)
    }

    attributeType(...value) {
        return this.set('attributeType', ...value)
    }

    autofocus(...value) {
        return this.set('autofocus', ...value)
    }

    azimuth(...value) {
        return this.set('azimuth', ...value)
    }

    baseFrequency(...value) {
        return this.set('baseFrequency', ...value)
    }

    baselineFrequency(...value) {
        return this.set('baselineFrequency', ...value)
    }

    baseProfile(...value) {
        return this.set('baseProfile', ...value)
    }

    begin(...value) {
        return this.set('begin', ...value)
    }

    bias(...value) {
        return this.set('bias', ...value)
    }

    by(...value) {
        return this.set('by', ...value)
    }

    calcMode(...value) {
        return this.set('calcMode', ...value)
    }

    clip(...value) {
        return this.set('clip', ...value)
    }

    clipPath(...value) {
        return this.set('clip-path', ...value)
    }

    clipRule(...value) {
        return this.set('clip-rule', ...value)
    }

    clipPathUnits(...value) {
        return this.set('clipPathUnits', ...value)
    }

    color(...value) {
        return this.set('color', ...value)
    }

    colorInterpolation(...value) {
        return this.set('color-interpolation', ...value)
    }

    colorInterpolationFilters(...value) {
        return this.set('color-interpolation-filters', ...value)
    }

    crossorigin(...value) {
        return this.set('crossorigin', ...value)
    }

    d = (...value) => this.set('d', ...value)

    x(...value) {
        return this.set('x', ...value)
    }

    y(...value) {
        return this.set('y', ...value)
    }

    x1(...value) {
        return this.set('x1', ...value)
    }

    y1(...value) {
        return this.set('y1', ...value)
    }

    x2(...value) {
        return this.set('x2', ...value)
    }

    y2(...value) {
        return this.set('y2', ...value)
    }

    cx(...value) {
        return this.set('cx', ...value)
    }

    cy(...value) {
        return this.set('cy', ...value)
    }

    r(...value) {
        return this.set('r', ...value)
    }

    width(...value) {
        return this.set('width', ...value)
    }

    height(...value) {
        return this.set('height', ...value)
    }

    stroke(...value) {
        return this.set('stroke', ...value)
    }

    fill(...value) {
        return this.set('fill', ...value)
    }

    cursor(...value) {
        return this.set('cursor', ...value)
    }

    decoding(...value) {
        return this.set('decoding', ...value)
    }

    diffuseConstant(...value) {
        return this.set('diffuseConstant', ...value)
    }

    direction(...value) {
        return this.set('direction', ...value)
    }

    display(...value) {
        return this.set('display', ...value)
    }

    divisor(...value) {
        return this.set('divisor', ...value)
    }

    dominantBaseline(...value) {
        return this.set('dominant-baseline', ...value)
    }

    dur(...value) {
        return this.set('dur', ...value)
    }

    edgeMode(...value) {
        return this.set('edgeMode', ...value)
    }

    elevation(...value) {
        return this.set('elevation', ...value)
    }

    end(...value) {
        return this.set('end', ...value)
    }

    exponent(...value) {
        return this.set('exponent', ...value)
    }

    fetchpriority(...value) {
        return this.set('fetchpriority', ...value)
    }

    fillOpacity(...value) {
        return this.set('fill-opacity', ...value)
    }

    fillRule(...value) {
        return this.set('fill-rule', ...value)
    }

    filter(...value) {
        return this.set('filter', ...value)
    }

    filterUnits(...value) {
        return this.set('filterUnits', ...value)
    }

    floodColor(...value) {
        return this.set('flood-color', ...value)
    }

    floodOpacity(...value) {
        return this.set('flood-opacity', ...value)
    }

    fontFamily(...value) {
        return this.set('font-family', ...value)
    }

    fontSize(...value) {
        return this.set('font-size', ...value)
    }

    fontSizeAdjust(...value) {
        return this.set('font-size-adjust', ...value)
    }

    fontStretch(...value) {
        return this.set('font-stretch', ...value)
    }

    fontStyle(...value) {
        return this.set('font-style', ...value)
    }

    fontVariant(...value) {
        return this.set('font-variant', ...value)
    }

    fontWeight(...value) {
        return this.set('font-weight', ...value)
    }

    fr(...value) {
        return this.set('fr', ...value)
    }

    from(...value) {
        return this.set('from', ...value)
    }

    fx(...value) {
        return this.set('fx', ...value)
    }

    fy(...value) {
        return this.set('fy', ...value)
    }

    glyphOrientationHorizontal(...value) {
        return this.set('glyph-orientation-horizontal', ...value)
    }

    glyphOrientationVertical(...value) {
        return this.set('glyph-orientation-vertical', ...value)
    }

    gradientTransform(...value) {
        return this.set('gradientTransform', ...value)
    }

    gradientUnits(...value) {
        return this.set('gradientUnits', ...value)
    }

    href(...value) {
        return this.set('href', ...value)
    }

    imageRendering(...value) {
        return this.set('image-rendering', ...value)
    }

    in(...value) {
        return this.set('in', ...value)
    }

    in2(...value) {
        return this.set('in2', ...value)
    }

    intercept(...value) {
        return this.set('intercept', ...value)
    }

    k(...value) {
        return this.set('k', ...value)
    }

    k1(...value) {
        return this.set('k1', ...value)
    }

    k2(...value) {
        return this.set('k2', ...value)
    }

    k3(...value) {
        return this.set('k3', ...value)
    }

    k4(...value) {
        return this.set('k4', ...value)
    }

    kernelMatrix(...value) {
        return this.set('kernelMatrix', ...value)
    }

    kernelUnitLength(...value) {
        return this.set('kernelUnitLength', ...value)
    }

    keyPoints(...value) {
        return this.set('keyPoints', ...value)
    }

    keySplines(...value) {
        return this.set('keySplines', ...value)
    }

    keyTimes(...value) {
        return this.set('keyTimes', ...value)
    }

    lengthAdjust(...value) {
        return this.set('lengthAdjust', ...value)
    }

    letterSpacing(...value) {
        return this.set('letter-spacing', ...value)
    }

    lightingColor(...value) {
        return this.set('lighting-color', ...value)
    }

    limitingConeAngle(...value) {
        return this.set('limitingConeAngle', ...value)
    }

    markerEnd(...value) {
        return this.set('marker-end', ...value)
    }

    markerMid(...value) {
        return this.set('marker-mid', ...value)
    }

    markerStart(...value) {
        return this.set('marker-start', ...value)
    }

    markerHeight(...value) {
        return this.set('markerHeight', ...value)
    }

    markerUnits(...value) {
        return this.set('markerUnits', ...value)
    }

    markerWidth(...value) {
        return this.set('markerWidth', ...value)
    }

    mask(...value) {
        return this.set('mask', ...value)
    }

    maskType(...value) {
        return this.set('mask-type', ...value)
    }

    maskContentUnits(...value) {
        return this.set('maskContentUnits', ...value)
    }

    maskUnits(...value) {
        return this.set('maskUnits', ...value)
    }

    max(...value) {
        return this.set('max', ...value)
    }

    media(...value) {
        return this.set('media', ...value)
    }

    method(...value) {
        return this.set('method', ...value)
    }

    min(...value) {
        return this.set('min', ...value)
    }

    mode(...value) {
        return this.set('mode', ...value)
    }

    numOctaves(...value) {
        return this.set('numOctaves', ...value)
    }

    opacity(...value) {
        return this.set('opacity', ...value)
    }

    operator(...value) {
        return this.set('operator', ...value)
    }

    order(...value) {
        return this.set('order', ...value)
    }

    orient(...value) {
        return this.set('orient', ...value)
    }

    origin(...value) {
        return this.set('origin', ...value)
    }

    overflow(...value) {
        return this.set('overflow', ...value)
    }

    paintOrder(...value) {
        return this.set('paint-order', ...value)
    }

    path(...value) {
        return this.set('path', ...value)
    }

    pathLength(...value) {
        return this.set('pathLength', ...value)
    }

    patternContentUnits(...value) {
        return this.set('patternContentUnits', ...value)
    }

    patternTransform(...value) {
        return this.set('patternTransform', ...value)
    }

    patternUnits(...value) {
        return this.set('patternUnits', ...value)
    }

    pointerEvents(...value) {
        return this.set('pointer-events', ...value)
    }

    points(...value) {
        return this.set('points', ...value)
    }

    pointsAtX(...value) {
        return this.set('pointsAtX', ...value)
    }

    pointsAtY(...value) {
        return this.set('pointsAtY', ...value)
    }

    pointsAtZ(...value) {
        return this.set('pointsAtZ', ...value)
    }

    preserveAlpha(...value) {
        return this.set('preserveAlpha', ...value)
    }

    preserveAspectRatio(...value) {
        return this.set('preserveAspectRatio', ...value)
    }

    primitiveUnits(...value) {
        return this.set('primitiveUnits', ...value)
    }

    radius(...value) {
        return this.set('radius', ...value)
    }

    refX(...value) {
        return this.set('refX', ...value)
    }

    refY(...value) {
        return this.set('refY', ...value)
    }

    repeatCount(...value) {
        return this.set('repeatCount', ...value)
    }

    repeatDur(...value) {
        return this.set('repeatDur', ...value)
    }

    requiredExtensions(...value) {
        return this.set('requiredExtensions', ...value)
    }

    requiredFeatures(...value) {
        return this.set('requiredFeatures', ...value)
    }

    restart(...value) {
        return this.set('restart', ...value)
    }

    result(...value) {
        return this.set('result', ...value)
    }

    rotate(...value) {
        return this.set('rotate', ...value)
    }

    rx(...value) {
        return this.set('rx', ...value)
    }

    ry(...value) {
        return this.set('ry', ...value)
    }

    scale(...value) {
        return this.set('scale', ...value)
    }

    seed(...value) {
        return this.set('seed', ...value)
    }

    shapeRendering(...value) {
        return this.set('shape-rendering', ...value)
    }

    side(...value) {
        return this.set('side', ...value)
    }

    slope(...value) {
        return this.set('slope', ...value)
    }

    spacing(...value) {
        return this.set('spacing', ...value)
    }

    specularConstant(...value) {
        return this.set('specularConstant', ...value)
    }

    specularExponent(...value) {
        return this.set('specularExponent', ...value)
    }

    spreadMethod(...value) {
        return this.set('spreadMethod', ...value)
    }

    startOffset(...value) {
        return this.set('startOffset', ...value)
    }

    stdDeviation(...value) {
        return this.set('stdDeviation', ...value)
    }

    stitchTiles(...value) {
        return this.set('stitchTiles', ...value)
    }

    stopColor(...value) {
        return this.set('stop-color', ...value)
    }

    stopOpacity(...value) {
        return this.set('stop-opacity', ...value)
    }

    strokeDasharray(...value) {
        return this.set('stroke-dasharray', ...value)
    }

    style(...value) {
        return this.set('style', ...value)
    }

    surfaceScale(...value) {
        return this.set('surfaceScale', ...value)
    }

    systemLanguage(...value) {
        return this.set('systemLanguage', ...value)
    }

    tabindex(...value) {
        return this.set('tabindex', ...value)
    }

    tableValues(...value) {
        return this.set('tableValues', ...value)
    }

    target(...value) {
        return this.set('target', ...value)
    }

    targetX(...value) {
        return this.set('targetX', ...value)
    }

    targetY(...value) {
        return this.set('targetY', ...value)
    }

    textAnchor(...value) {
        return this.set('text-anchor', ...value)
    }

    textDecoration(...value) {
        return this.set('text-decoration', ...value)
    }

    textOverflow(...value) {
        return this.set('text-overflow', ...value)
    }

    textRendering(...value) {
        return this.set('text-rendering', ...value)
    }

    textLength(...value) {
        return this.set('textLength', ...value)
    }

    to(...value) {
        return this.set('to', ...value)
    }

    transform(...value) {
        return this.set('transform', ...value)
    }

    transformOrigin(...value) {
        return this.set('transform-origin', ...value)
    }

    type(...value) {
        return this.set('type', ...value)
    }

    unicodeBidi(...value) {
        return this.set('unicode-bidi', ...value)
    }

    values(...value) {
        return this.set('values', ...value)
    }

    vectorEffect(...value) {
        return this.set('vector-effect', ...value)
    }

    version(...value) {
        return this.set('version', ...value)
    }

    viewBox(...value) {
        return this.set('viewBox', ...value)
    }

    visibility(...value) {
        return this.set('visibility', ...value)
    }

    whiteSpace(...value) {
        return this.set('white-space', ...value)
    }

    wordSpacing(...value) {
        return this.set('word-spacing', ...value)
    }

    writingMode(...value) {
        return this.set('writing-mode', ...value)
    }

    yChannelSelector(...value) {
        return this.set('yChannelSelector', ...value)
    }

    z(...value) {
        return this.set('z', ...value)
    }

    zoomAndPan(...value) {
        return this.set('zoomAndPan', ...value)
    }

    onClick(handler, preventDefault = true) {
        return this.on('click', handler, preventDefault)
    }

    onDoubleClick(handler, preventDefault = true) {
        return this.on('dblclick', handler, preventDefault)
    }

    onMouseOver(handler, preventDefault = false) {
        return this.on('mouseover', handler, preventDefault)
    }

    onMouseOut(handler, preventDefault = false) {
        return this.on('mouseout', handler, preventDefault)
    }

    onKeyPress(handler, preventDefault = false) {
        return this.on('keypress', handler, preventDefault)
    }

    onKeyDown(handler, preventDefault = false) {
        return this.on('keydown', handler, preventDefault)
    }

    onKeyUp(handler, preventDefault = false) {
        return this.on('keyup', handler, preventDefault)
    }

    onDragstart(handler, preventDefault = false) {
        return this.on('dragstart', handler, preventDefault)
    }

    onDrag(handler, preventDefault = false) {
        return this.on('drag', handler, preventDefault)
    }

    onDrop(handler, preventDefault = false) {
        return this.on('drop', handler, preventDefault)
    }

    onDragend(handler, preventDefault = false) {
        return this.on('dragend', handler, preventDefault)
    }

    onDragover(handler, preventDefault = false) {
        return this.on('dragover', handler, preventDefault)
    }

    onDragleave(handler, preventDefault = false) {
        return this.on('dragleave', handler, preventDefault)
    }

    transfer(channel, data) {
        return this.draggable(true).cursor('grab').onDragstart(set(channel, data)).onDragend(set(channel, null))
    }

    receive(channel, action, dragStartClass, dragOverClass) {
        return this
            .onDragover((_, e) => null !== channel.get() && e.preventDefault())
            .onDrop(() => null != channel.get() && action(channel.get()))
            .receivingClasses(channel, dragStartClass, dragOverClass)
    }

    receiving(channel, model) {
        channel.observe(value => value || model.set(false))
        return this.onDragover(() => channel.get() && model.set(true)).onDragleave(set(model, false))
    }

    receivingClasses(channel, dragStartClass, dragOverClass) {
        let indication = stateModel(false)
        if (dragStartClass) this.addClass(transform(channel, to(dragStartClass)))
        if (dragOverClass) this.addClass(transform(indication, to(" " + dragOverClass)))
        return this.receiving(channel, indication)
    }

    dragTo(item, target) {
        return this.transfer(channelOf(target), data)
    }

    dropTo(target) {
        return this.receive(channelOf(target), item => target.update(a => a.push(item)))
    }

}

/**
 * Creates an instance of ElementBuilder with the provided node and content.
 *
 * @param {Node} node - The node element to be built.
 * @param {...*} content - The content to be added to the element.
 * @returns {SvgBuilder} - The instance of ElementBuilder.
 * @throws {ReferenceError} - If the provided node is not an instance of Node.
 */
export function builder(node, ...content) {
    if (node instanceof Node) return new SvgBuilder(node).add(...content)
    throw new ReferenceError("Provided value must be instance of Node. Got: " + node);
}

export function element(name, ...content) {
    return builder(document.createElementNS('http://www.w3.org/2000/svg', name), ...content)
}

export function svg(...content) {
    return element('svg', ...content)
}

export function a(...content) {
    return element('a', ...content)
}

export function path(...content) {
    return element('path', ...content)
}

export function image(...content) {
    return element('image', ...content)
}

export function ellipse(...content) {
    return element('ellipse', ...content)
}

export function animate(...content) {
    return element('animate', ...content)
}

export function animateTransform(...content) {
    return element('animateTransform', ...content)
}

export function clipPath(...content) {
    return element('clipPath', ...content)
}

export function filter(...content) {
    return element('filter', ...content)
}

export function linearGradient(...content) {
    return element('linearGradient', ...content)
}

export function radialGradient(...content) {
    return element('radialGradient', ...content)
}

export function stop(...content) {
    return element('stop', ...content)
}

export function foreignObject(...content) {
    return element('foreignObject', ...content)
}

export function style(...content) {
    return element('style', ...content)
}

export function marker(...content) {
    return element('marker', ...content)
}

export function metadata(...content) {
    return element('metadata', ...content)
}

export function mpath(...content) {
    return element('mpath', ...content)
}

export function script(...content) {
    return element('script', ...content)
}

export function title(...content) {
    return element('title', ...content)
}

export function tspan(...content) {
    return element('tspan', ...content)
}

export function view(...content) {
    return element('view', ...content)
}

export function setElement(...content) {
    return element('set', ...content)
}

export function animateColor(...content) {
    return element('animateColor', ...content)
}

export function animateMotion(...content) {
    return element('animateMotion', ...content)
}

export function switchElement(...content) {
    return element('switch', ...content)
}

export function symbol(...content) {
    return element('symbol', ...content)
}

export function rect(...content) {
    return element('rect', ...content)
}

export function circle(...content) {
    return element('circle', ...content)
}

export function line(...content) {
    return element('line', ...content)
}

export function polygon(...content) {
    return element('polygon', ...content)
}

export function polyline(...content) {
    return element('polyline', ...content)
}

export function text(...content) {
    return element('text', ...content)
}

export function g(...content) {
    return element('g', ...content)
}

export function defs(...content) {
    return element('defs', ...content)
}

export function desc(...content) {
    return element('desc', ...content)
}

export function textPath(...content) {
    return element('textPath', ...content)
}

export function use(...content) {
    return element('use', ...content)
}

export function mask(...content) {
    return element('mask', ...content)
}

export function pattern(...content) {
    return element('pattern', ...content)
}

export function feBlend(...content) {
    return element('feBlend', ...content)
}

export function feColorMatrix(...content) {
    return element('feColorMatrix', ...content)
}

export function feComponentTransfer(...content) {
    return element('feComponentTransfer', ...content)
}

export function feComposite(...content) {
    return element('feComposite', ...content)
}

export function feConvolveMatrix(...content) {
    return element('feConvolveMatrix', ...content)
}

export function feDiffuseLighting(...content) {
    return element('feDiffuseLighting', ...content)
}

export function feDisplacementMap(...content) {
    return element('feDisplacementMap', ...content)
}

export function feDistantLight(...content) {
    return element('feDistantLight', ...content)
}

export function feDropShadow(...content) {
    return element('feDropShadow', ...content)
}

export function feFlood(...content) {
    return element('feFlood', ...content)
}

export function feFuncA(...content) {
    return element('feFuncA', ...content)
}

export function feFuncB(...content) {
    return element('feFuncB', ...content)
}

export function feFuncG(...content) {
    return element('feFuncG', ...content)
}

export function feFuncR(...content) {
    return element('feFuncR', ...content)
}

export function feGaussianBlur(...content) {
    return element('feGaussianBlur', ...content)
}

export function feImage(...content) {
    return element('feImage', ...content)
}

export function feMerge(...content) {
    return element('feMerge', ...content)
}

export function feMergeNode(...content) {
    return element('feMergeNode', ...content)
}

export function feMorphology(...content) {
    return element('feMorphology', ...content)
}

export function feOffset(...content) {
    return element('feOffset', ...content)
}

export function fePointLight(...content) {
    return element('fePointLight', ...content)
}

export function feSpecularLighting(...content) {
    return element('feSpecularLighting', ...content)
}

export function feSpotLight(...content) {
    return element('feSpotLight', ...content)
}

export function feTile(...content) {
    return element('feTile', ...content)
}

export function feTurbulence(...content) {
    return element('feTurbulence', ...content)
}

export function feDistantLight2(...content) {
    return element('feDistantLight2', ...content)
}
