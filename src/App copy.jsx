import './App.css';



const labelSettings = [
  { labelname: "長度", id: 1, hasCheckBox: false },
  { labelname: "組數", id: 2, hasCheckBox: false },
  { labelname: "相似度", id: 3, hasCheckBox: true },
  { labelname: "禁用的數字", id: 4, hasCheckBox: true },
  { labelname: "禁用的大寫英文字母", id: 5, hasCheckBox: true },
  { labelname: "禁用的小寫英文字母", id: 6, hasCheckBox: true },
]


function text_align(align) {
  return { textAlign: align }
}

const labelList = labelSettings.map(labelSetting => {
  const shouldRenderCheckbox = labelSetting.hasCheckBox;
  return (
    <div className="labelitem" key={labelSetting.id}>

      <div className="label">
        <label>{labelSetting.labelname}</label>
      </div>

      <div className="textbox">
        <input type="text" />
      </div>

      <div className="checkbox">
        {shouldRenderCheckbox ? (
          <input type="checkbox" name="check" defaultChecked={true} />
        ) : (
          <div className="ABC">
          </div>
        )}
        <span>{shouldRenderCheckbox ? '啟用' : ""}</span>
      </div>
    </div>
  );
});


function App() {


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
