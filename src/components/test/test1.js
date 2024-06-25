import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Font Examples</h1>
      <div className="font-sample" style={{ fontFamily: 'Arial, sans-serif' }}>
        <strong>Arial:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Helvetica, sans-serif' }}>
        <strong>Helvetica:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <strong>Times New Roman:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        <strong>Courier New:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Georgia, serif' }}>
        <strong>Georgia:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
        <strong>Verdana:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>
        <strong>Tahoma:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: "'Trebuchet MS', Helvetica, sans-serif" }}>
        <strong>Trebuchet MS:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif" }}>
        <strong>Lucida Grande:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <strong>Roboto:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <strong>Open Sans:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Lato, sans-serif' }}>
        <strong>Lato:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <strong>Montserrat:</strong> The quick brown fox jumps over the lazy dog.
      </div>
      <div className="font-sample" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
        <strong>Source Sans Pro:</strong> The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  );
}

export default App;
