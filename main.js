function Clock(props) {
    const [date, setDate] = React.useState(new Date());
    const [textColor, setTextColor] = React.useState("black");

    const tick = () => {
        setDate(new Date());
    };

    React.useEffect(() => {
        tick();
    }, []);

    const changeColor = () => {
        var randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
        )}`;
        setTextColor(randomColor);
        console.log(randomColor);
    };

    const baseColor = () => {
        setTextColor("black");
        console.log(color);
    };

    return (
        <div>
            <h1>Hello world</h1>
            <h2>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={changeColor}>Change color</button>
            <button onClick={baseColor}>Reset color</button>
        </div>
    );
}

ReactDOM.render(<Clock />, document.querySelector("#app"));

// const [date, setDate] = React.useState(new Date());
// const [textColor, setTextColor] = React.useState("black");
// const intervalRef = React.useRef();
// const tick = () => {
//     intervalRef.current = setInterval(() => {
//         setDate(new Date());
//     }, 1000)
//
// }
//
// const changeColor = () => {
//     var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//     setTextColor(randomColor);
// }
//
// const resetColor = () => {
//     setTextColor('black')
// }
