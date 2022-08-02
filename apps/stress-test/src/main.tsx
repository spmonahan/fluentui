import * as React from 'react';
import * as ReactDOM from 'react-dom';

const RootApp = () => {
  return (
    <>
      <h1>Fluent UI Stress Testing</h1>
      <p>This is a collection of applications used to stress test Fluent UI components.</p>
      <ul>
        <li>
          <a href="/v8/inlook/">Fluent v8 Stress Test</a>
        </li>
        <li>
          <a href="/v9/inlook/">Fluent v9 Stress Test</a>
        </li>
        <li>
          <a href="/v8/simple-stress/">Fluent v8 Simple Stress Test</a>
        </li>
        <li>
          <a href="/v9/simple-stress/">Fluent v9 Simple Stress Test</a>
        </li>
        <li>
          <a href="/wc/simple-stress/">Fluent Web Components Simple Stress Test</a>
        </li>
      </ul>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
