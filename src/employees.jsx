let sally = 'Sally Smith'
let mark = 'Mark Marting'
let holly = 'Holly Unkiken'
let amol = 'Amol Shookup'
let robin = 'Robin Hanks'
let erin = 'Erin Blueto'
let ricky = 'Ricky Martin'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally} </li>
        <li>{mark} </li>
        <li>{holly} </li>
        <li>{amol} </li>
        <li>{robin}</li>
        <li>{erin}</li>
        <li>{ricky}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))