import * as React from 'react';
import * as ReactDOM from 'react-dom';

const RootApp = () => {
  return (
    <>
      <h1>Fluent UI Stress Testing</h1>
      <p>This is a collection of applications used to stress test Fluent UI components.</p>
      <p>
        These applications are meant to be "representative" of real world applications (e.g., they maintain state and
        have some functionality) but are also intended to be simple enough that new components and approaches can easily
        be dropped in for comparison.
      </p>
      <ul>
        <li>
          <a href="/v8/inlook/">Fluent v8 Stress Test</a>
        </li>
        <li>
          <a href="/v9/inlook/">Fluent v9 Stress Test</a>
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
