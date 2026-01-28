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
        return this.set('contenteditable', ...value)
    }

    fill(value) {
        return this.set('fill', value)
    }

    cursor(value) {
        return this.css('cursor', value)
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

export function use(...content) {
    return element('use', ...content)
}

export function mask(...content) {
    return element('mask', ...content)
}

export function pattern(...content) {
    return element('pattern', ...content)
}
