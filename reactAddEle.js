class App2 extends Component {
    render() {
        return (
            <div id="ReactDiv">
                <h2>数字为：{num}</h2>
                <button onClick={() => { console.log(123); }}>累加</button>
            </div>
        )
    }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App2 tab="home" />);
