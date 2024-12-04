let sally = 'Sally Smith';
let mark = 'Mark Marting';
let holly = 'Holly Unkiken';
let amol = 'Amol Shookup';
let robin = 'Robin Hanks';
let erin = 'Erin Blueto';
let ricky = 'Ricky Martin';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally, " "), /*#__PURE__*/React.createElement("li", null, mark, " "), /*#__PURE__*/React.createElement("li", null, holly, " "), /*#__PURE__*/React.createElement("li", null, amol, " "), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, erin), /*#__PURE__*/React.createElement("li", null, ricky));
ReactDOM.render(element, document.getElementById('content'));