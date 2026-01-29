import {state, stateModel} from "./mvc.js";

export class Link {
    constructor(url, output = stateModel()) {
        this.url = stateModel(url)
        this.headers = state({})
        this.output = output
        this.state = state({})
    }

    connect() {
        throw new Error("Undeclared method Link.connect()")
    }

    trigger() {
        this.connect()
        return this
    }

    set(newConsumer) {
        this.output.set(newConsumer)
        return this
    }
}

export class Get extends Link {
    constructor(url, output = stateModel()) {
        super(url, output);
    }

    connect() {
        fetch(this.url.get(), {
            headers: this.headers.get(),
            credentials: "include"
        }).then(response => response.json()).then(data => this.output.set(data))
    }
}

export class Post extends Link {
    constructor(url, body, output = stateModel()) {
        super(url, output);
        this.headers.set({"Content-Type": "application/json"})
        this.body = stateModel(body)
    }

    connect() {
        fetch(this.url.get(), {
            headers: this.headers.get(),
            credentials: "include",
            method: "POST",
            body: JSON.stringify(this.body.get())
        }).then(response => response.json()).then(data => this.output.set(data))
    }
}

export class SSE extends Link {
    constructor(url, output = stateModel()) {
        super(url, output);
    }

    connect() {
        new EventSource(this.url.get(), {withCredentials: true}).onmessage = event => this.output.set(JSON.parse(event.data))
    }
}

export class Webs extends Link {
    constructor(url, input, output = stateModel()) {
        super(url, output);
        this.input = input
    }

    connect() {
        const ws = new WebSocket(this.url.get())
        ws.onmessage = (m) => {m.data && this.output.set(JSON.parse(m.data))}
        this.input.observeChanges(v => ws.send(JSON.stringify(v)))
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
