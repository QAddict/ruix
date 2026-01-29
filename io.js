import {stateModel} from "./mvc.js";

export class Link {
    constructor(url, output = stateModel()) {
        this.url = stateModel(url)
        this.output = output
    }

    trigger() {
        this.connect()
        return this
    }

    set(newConsumer) {
        this.output.set(newConsumer)
    }
}

export class Get extends Link {
    constructor(url, output = stateModel()) {
        super(url, output);
    }

    connect() {
        fetch(this.url.get()).then(response => response.json()).then(data => this.output.set(data))
    }
}

export class Post extends Link {
    constructor(url, body, output = stateModel()) {
        super(url, output);
    }

    connect() {
        fetch(this.url.get()).then(response => response.json()).then(data => this.output.set(data))
    }
}

export class SSE extends Link {
    constructor(url, output = stateModel()) {
        super(url, output);
    }

    connect() {
        new EventSource(this.url.get()).onmessage = event => this.output.set(JSON.parse(event.data))
    }
}

export class Webs extends Link {
    constructor(url, output = stateModel()) {
        super(url, output);
    }

    connect() {
        new WebSocket(this.url.get()).onmessage = () => {}
    }
}

export function post(url, body) {
    return new Post(url, body)
}

/**
 *
 * @param url
 */
export function get(url) {
    return new Get(url)
}

export function sse(url) {
    return new SSE(url)
}

export function bind(channel, model) {
    channel.set(data => model.set(data))
}
