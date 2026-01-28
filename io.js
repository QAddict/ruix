/**
 *
 * @param url
 */
export function get(url) {
    let consumer = () => {}
    return {
        trigger() {
            fetch(url).then(response => response.json()).then(data => consumer(data))
        },
        set(newConsumer) {
            consumer = newConsumer
        }
    }
}

export function bind(channel, model) {
    channel.set(data => model.set(data))
}
