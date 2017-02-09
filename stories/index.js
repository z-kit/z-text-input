import React from 'react';
import { storiesOf } from '@kadira/storybook';
import input from '../src/component';

const ZInput = input(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-input">
      <input
        name="test"
        type="text"
        placeholder="Type something"
        required
      />
    </div>
  ))
  .add('box', () => (
    <div className="z-input z-input--box">
      <input
        name="test"
        type="text"
        placeholder="Type something"
        required
      />
    </div>
  ))
  .add('borderless', () => (
    <div className="z-input z-input--borderless">
      <input
        name="test"
        type="text"
        placeholder="Type something"
        required
      />
    </div>
  ))
  .add('label', () => (
    <div className="z-input z-input--label">
      <input
        name="test"
        type="text"
        required
      />
      <label htmlFor="text" className="z-input__label">Type something</label>
    </div>
  ))
  .add('colors', () => (
    <div>
      <div className="z-input z-input--success">
        <input
          name="test"
          type="text"
          placeholder="Type something"
          required
        />
      </div>
      <div className="z-input z-input--warning">
        <input
          name="test"
          type="text"
          placeholder="Type something"
          required
        />
      </div>
      <div className="z-input z-input--danger">
        <input
          name="test"
          type="text"
          placeholder="Type something"
          required
        />
      </div>
      <div className="z-input z-input--error">
        <input
          name="test"
          type="text"
          placeholder="Type something"
          required
        />
      </div>
    </div>
  ))
  .add('prefix and suffix', () => (
    <div className="z-input z-input--prefix z-input--suffix">
      <input
        name="test"
        type="text"
        placeholder="Type something"
        required
      />
      <div className="z-input__prefix" />
      <div className="z-input__suffix" />
    </div>
  ))
  .add('disabled', () => (
    <div className="z-input">
      <input
        name="test"
        type="text"
        placeholder="Type something"
        disabled
      />
    </div>
  ))
  .add('dark', () => (
    <div style={{ width: '100%', height: '300px', background: '#333' }}>
      <div className="z-input z-input--dark">
        <input
          name="test"
          type="text"
          placeholder="Type something"
          required
        />
      </div>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <ZInput placeholder="Type something" />)
  .add('box', () => <ZInput placeholder="Type something" box />)
  .add('borderless', () => <ZInput placeholder="Type something" borderless />)
  .add('label', () => <ZInput label="Type something" required />)
  .add('colors', () => (
    <div>
      <ZInput placeholder="Type something" success />
      <ZInput placeholder="Type something" warning />
      <ZInput placeholder="Type something" danger />
      <ZInput placeholder="Type something" error />
    </div>
  ))
  .add('prefix and suffix', () => <ZInput placeholder="Type something" prefix suffix />)
  .add('disabled', () => <ZInput placeholder="Type something" disabled />)
  .add('dark', () => (
    <div style={{ width: '100%', height: '300px', background: '#333' }}>
      <ZInput placeholder="Type something" dark />
    </div>
  ));
