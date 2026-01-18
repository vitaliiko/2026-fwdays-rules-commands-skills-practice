# Sequence Diagram Best Practices

- Declare all participants at the top.
- Messages must reflect real actions (method calls, events).
- Use `->>` for async, `-->>` for responses.
- Group logic with `alt`, `opt`, `loop` when helpful.
