import React, { useState } from "react";
import './App.css';


const settingData = [
  { labelname: "長度", id: 1, hasCheckBox: false, placeholderText: "序號長度", regexPattern: "[0-9]{1,2}" },
  { labelname: "組數", id: 2, hasCheckBox: false, placeholderText: "序號產生組數", regexPattern: "[0-9]{1,8}" },
  { labelname: "相似度", id: 3, hasCheckBox: true, placeholderText: "各個序號相似度", regexPattern: ".+" },
  { labelname: "禁用的數字", id: 4, hasCheckBox: true, placeholderText: "序號禁用的數字", regexPattern: "^[0-9](,[0-9])*,?$" },
  { labelname: "禁用的大寫英文字母", id: 5, hasCheckBox: true, placeholderText: "序號禁用的大寫英文字母", regexPattern: "^[A-Z](,[A-Z])*,?$" },
  { labelname: "禁用的小寫英文字母", id: 6, hasCheckBox: true, placeholderText: "序號禁用的大寫英文字母", regexPattern: "^[a-z](,[a-z])*,?$" },
]



// 參考用 不能動
const LoginForm = (props) => {

  const [account, setAccount] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => { setAccount(e.target.value) }} />
      <label>{props.label}</label>
      <div>
        目前account:{account}
      </div>
      <div>
        <button onClick={(e) => { window.alert(account) }}>按我</button>
      </div>
    </div>
  )
}
// 參考用 不能動



const InputForm = (props) => {
  const [inputValue, setInputValue] = useState("")
  const [isEditable, setIsEditable] = useState(true);
  const [regexValue, setRegexValue] = useState("")

  const shouldRenderCheckbox = props.hasCheckBox

  return (
    <div className="labelitem" key={props.id}>
      <div className="label">
        <label>{props.labelname}</label>
      </div>
      <div className="textbox">
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
            setRegexValue((value) => (e.target.validity.valid ? e.target.value : value));
          }}
          disabled={!isEditable}
          placeholder={props.placeholderText}
          pattern={props.regexPattern}
          value={regexValue}
        />
      </div>
      <div className="checkbox">
        {shouldRenderCheckbox ? (
          <input type="checkbox" name="check" defaultChecked={true} onChange={(event) => {
            setIsEditable(event.target.checked);
            console.log(inputValue)
          }} />
        ) : (
          <div className="ABC">
          </div>
        )}
        <span>{shouldRenderCheckbox ? '啟用' : ""}</span>
      </div>



    </div>
  )
}

const CheckBoxRowForm = (props) => {
  const labels = [<label key={0}>{}</label>]
  const gridColumns = Array.from({ length: props.length+1 }, () => '1fr').join(' ');
  for (let i = 1; i < props.length+1; i++) {
    labels.push(<label key={i}>{i}</label>)
  }
  return (<div className="grid" style={{ gridTemplateColumns: gridColumns}}>{labels}</div>)
}


function App() {
  // 參考用 不能動
  const generatorLoginForm = (labelList) => {
    const LoginForms = []
    for (const i in labelList) {
      LoginForms.push(<LoginForm label={labelList[i]} />)
    }
    // 參考用 不能動



    return LoginForms
  }

  // const generatorInputForm = settingData.map(setting => {
  //   return (<InputForm id={setting.id} label={setting.labelname} hasCheckBox={setting.hasCheckbox} />)
  // })

  const generatorInputForm = (settingData) => {
    const InputForms = []
    settingData.forEach((setting, _) => {
      InputForms.push(
        <InputForm
          id={setting.id}
          labelname={setting.labelname}
          hasCheckBox={setting.hasCheckBox}
          placeholderText={setting.placeholderText}
          regexPattern={setting.regexPattern}
        />)

    })
    return InputForms
  }

  return (
    <div className="App">
      <div className="child_div">
        <div className="center">
          <h1>序號產生器</h1>
        </div>

      </div>
      <div className="child_div">
        {/* {generatorLoginForm(["A", "B", "C"])} */}
        {generatorInputForm(settingData)}
      </div>
      <div className="child_div" style={{display:"grid"}}>
        <CheckBoxRowForm length={20}/>
      </div>
      
    </div>

  )
}

export default App;