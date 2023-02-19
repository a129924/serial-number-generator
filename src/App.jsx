import './App.css';

const labels = [
  { labelname: "長度", id: 1 },
  { labelname: "組數", id: 2 },
  { labelname: "相似度", id: 3 },
]


function text_align(align) {
  return { textAlign: align }
}


function App() {


  const labelList = labels.map(label =>
    <div className="labelitem"
      key={label.id}
    >
      <label>{label.labelname}</label>
      <input
        type="text" />
      <input
        type="checkbox"
        name="check"
        defaultChecked={true}
      />啟用

    </div>
  )

  return (
    <div className="App">
      <div className="child_div"
        style={text_align("center")}
      >
        <h1>序號產生器</h1>

      </div>
      <div className="child_div"
        style={text_align("left")}
      >
        {labelList}

      </div>
      <div className="child_div">
        <button
          className='buttonitem'
          type="button">
          產生序號
        </button>

      </div>

    </div>

  );
}

export default App;
