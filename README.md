# use-not

A custom Hook that implements a simple NOT (or toggle) of a Boolean value.

Instead of keeping state yourself, and toggling the current state before calling the setter,
`useNot`'s setter function will NOT the current value for you. This allows you to call the
function directly without requiring the assistance of a lambda function.

## Requirement ⚠️

To use `useNot`, you must use at minimum `react@16.7.0-alpha.0`. React Hooks is currently at **[RFC](https://github.com/reactjs/rfcs/pull/68)** stage.

## Installation

```sh
npm i use-not
```

## Usage

```js
const [value, not] = useNot(initialValue);
```

Where:

**value** (a Boolean) is the current value.

**not** is a function that you can call to NOT the value.
i.e. change from `true` to `false` and vise versa.


## Example

Here is a simple App that toggles a value.

```jsx
function App() {
  const [value, setValue] = useState(false);
  return (
    <a onClick={() => setValue(current => !current)}>
      <div style={{ backgroundColor: value ? 'red' : 'blue' }} />
    </a>
  );
}
```

Note that in the `onClick` handler, we have a lambda function that takes the current
value and returns the notted value.

Below is the same App. This time using `useNot`.

```jsx
function App() {
  const [value, not] = useToggle(false);
  return (
    <a onClick={not}>
      <div style={{ backgroundColor: value ? 'red' : 'blue' }} />
    </a>
  );
}
```

Notice that the lambda function is replaced simply with a call to `not`.

Again. Before:
```jsx
<a onClick={() => setValue(current => !current)}>
```
After:
```jsx
<a onClick={not}>
```

You can see the above demo [running live](https://codesandbox.io/s/j1nplwxx49) on CodeSandbox.

## License

MIT Licensed