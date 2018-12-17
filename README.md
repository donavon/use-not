# use-not

[![npm version](https://badge.fury.io/js/use-not.svg)](https://badge.fury.io/js/use-not)

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
const [value, notValue] = useNot(initialValue);
```

Where:

**value** (a Boolean) is the current value.

**notValue** is a function that you can call to NOT the value.
i.e. change from it `true` to `false` and vise versa.


## Example

Here is a simple App that toggles a value to produce either a blue or a red square.

```jsx
function App() {
  const [value, setValue] = useState(false);
  return (
    <div
      onClick={() => setValue(current => !current)}
      style={{
        width: 100,
        height: 100,
        backgroundColor: value ? 'red' : 'blue'
      }}
    />
  );
}
```

Note that in the `onClick` handler, we have a lambda function that will take the current
value, NOT it, and returns the new value.

Below is the same App. This time using `useNot`.

```jsx
function App() {
  const [value, notValue] = useToggle(false);
  return (
    <div
      onClick={notValue}
      style={{
        width: 100,
        height: 100,
        backgroundColor: value ? 'red' : 'blue'
      }}
    />
  );
}
```

Notice that the lambda function is replaced simply with a call to `not`.

Again. Before:
```jsx
onClick={() => setValue(current => !current)}
```
After:
```jsx
onClick={notValue}
```

Is this rocket science? No. However, if you find yourself doing this multiple times,
or even once, it's a nice abstraction to help declutter your code.

## Live demo

You can see the above demo [running live](https://codesandbox.io/s/j1nplwxx49) on CodeSandbox.

## License

MIT Licensed