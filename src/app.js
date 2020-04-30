import { React, ReactDOM } from 'es-react';

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ padding: 100, textAlign: 'center', fontSize: 80 }}>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count - 1)}>- 减少</button>
      <button onClick={() => setCount(count + 1)}>+ 增加</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
