# RUIX
**R**apid **U**ser **I**nteractive e**X**perience development library

Simple pure EcmaScript 6 fluent interface based library for rapid development of interactive single page applications.

## Goal
Make development simple, structured and clien like 1..2..3..4

1. Define flexible model trees
2. Define view using simple fluent interface definition of UI elements / components
3. Define server communication endpoints (simple GET/POST/PUT/UPDATE, but also WebSockets, EventSource / ServerSentEvents)
4. Bind communication endpoints to models and immediately get dynamic content or realtime updates

Example:
```
// 1. Model
const books = state()

// 2. View
body(
    table(
        tr(
            th('Author'),
            th('Title'),
            th('ISBN')
        ),
        each(books, book => tr(
            td(book.author),
            td(book.title),
            td(book.isbn)
        ))
    )
)

// 3. Endpoint
const booksApi = get("http://book.server.com/books")

// 4. Bind communication
bind(booksApi, books)
```
