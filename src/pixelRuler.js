
function pixelRuler (width) {
  var w = width || 20;
  var lastKnownY = 0;

  // Options
  var styles = {
    common:  { position: 'fixed', display: 'block', top: 0, width: w },
    ruler:   { left: 0, background: 'white', zIndex: 10000, borderRight: '1px solid black' },
    readout: { left: w + 'px', background: 'black', color: 'white', fontFamily: 'monospace', zIndex: 10001, padding: '3px 5px 2px' }
  };

  // Helpers
  var line = function (y, x, col) {
    ctx.beginPath();
    ctx.strokeStyle = col;
    ctx.moveTo(w - w * x, y + 0.5);
    ctx.lineTo(w, y + 0.5);
    ctx.stroke();
  }

  var lineAt = function (i) {
    if (i % 500 === 0) { line(i, 1, 'black'); }
    else if (i % 100 === 0) { line(i, 1, 'grey'); }
    else if (i % 10 === 0) { line(i, 2/3, 'darkgrey'); }
    else if (i % 2 === 0) { line(i, 1/3, 'darkgrey'); }
  }

  function applyStyles (el) {
    for (var i = 1, n = arguments.length - 1; i < n; i++) {
      for (var p in arguments[i]) { el.style[p] = arguments[i][p]; }
    }
  }

  var canvas  = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width  = w;
  applyStyles(canvas, styles.common, styles.ruler);
  for (var i = 0, max = canvas.height; i < max; i++) { lineAt(i); }

  var readout = document.createElement('div');
  readout.innerText = '0';
  applyStyles(readout, styles.common);
  applyStyles(readout, styles.readout);

  document.addEventListener('mousemove', function (event) {
    readout.innerText = event.pageY;
    readout.style.top = event.pageY + 'px';
    readout.style.left = (event.pageX + 20) + 'px';
    line(lastKnownY, 1, 'white');
    lineAt(lastKnownY);
    line(event.pageY, 1, 'red');
    lastKnownY = event.pageY;
  });

  document.body.appendChild(canvas);
  document.body.appendChild(readout);
}

function pixelRuler (width) {

  // Defaults
  var w = width || 20;

  // State
  var lastKnownY = 0;

  // Options
  var styles = {
    common: {
      position : 'fixed',
      display  : 'block',
      top      : 0,
      width    : w
    },
    ruler: {
      left        : 0,
      background  : 'white',
      zIndex      : 10000,
      borderRight : '1px solid black'
    },
    readout: {
      left       : w + 'px',
      background : 'black',
      color      : 'white',
      fontFamily : 'monospace',
      zIndex     : 10001,
      padding    : '3px 5px 2px'
    }
  };

  // Helpers
  var line = function (y, x, col) {
    ctx.beginPath();
    ctx.strokeStyle = col ? col : 'darkgrey';
    ctx.moveTo(w - w * x, y + 0.5);
    ctx.lineTo(w, y + 0.5);
    ctx.stroke();
    ctx.closePath();
  }

  var lineAt = function (i) {
    if (i % 500 === 0) {
      line(i, 1, 'black');
    } else if (i % 100 === 0) {
      line(i, 1, 'grey');
    } else if (i % 10 === 0) {
      line(i, 2/3);
    } else if (i % 2 === 0) {
      line(i, 1/3);
    }
  }

  function applyStyles (el, styles) {
    for (var p in styles) {
      el.style[p] = styles[p];
    }
  }

  // Prepare canvas
  var canvas  = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width  = w;
  applyStyles(canvas, styles.common);
  applyStyles(canvas, styles.ruler);
  for (var i = 0, max = canvas.height; i < max; i++) { lineAt(i); }

  // Prepare tooltip
  var readout = document.createElement('div');
  readout.innerText = '0';
  applyStyles(readout, styles.common);
  applyStyles(readout, styles.readout);

  var draw = function (y, x, col) {
  }

  // Show value on hover
  document.addEventListener('mousemove', function (event) {
    var y = event.pageY;
    var x = event.pageX;
    readout.innerText = y;
    readout.style.top = y + 'px';
    readout.style.left = (x + 20) + 'px';
    line(lastKnownY, 1, 'white');
    lineAt(lastKnownY);
    line(y, 1, 'red');
    lastKnownY = y;
  });

  // Show
  document.body.appendChild(canvas);
  document.body.appendChild(readout);
}

