import React, { useState } from "react";
import './App.css';


const settingData = [
  { labelname: "長度", id: 1, hasCheckBox: false },
  { labelname: "組數", id: 2, hasCheckBox: false },
  { labelname: "相似度", id: 3, hasCheckBox: true },
  { labelname: "禁用的數字", id: 4, hasCheckBox: true },
  { labelname: "禁用的大寫英文字母", id: 5, hasCheckBox: true },
  { labelname: "禁用的小寫英文字母", id: 6, hasCheckBox: true },
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
        <button onClick={(e) => { window.alert(account)}}>按我</button>
      </div>
    </div>
  )
}
// 參考用 不能動



const InputForm = (props) => {
  // const [inputValue, SetInputValue] = useState("")
  const shouldRenderCheckbox = props.hasCheckBox
  return (
    <div className="labelitem" key={props.id}>
      <div className="label">
        <label>{props.labelname}</label>
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
  )
}




function App() {
  // 參考用 不能動
  const generatorLoginForm = (labelList) => {
    const LoginForms = []
    for (const i in labelList) {
      LoginForms.push(<LoginForm label={labelList[i]} /> )
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
      InputForms.push(<InputForm id={setting.id} labelname={setting.labelname} hasCheckBox={setting.hasCheckBox} />)

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

    </div>
    
  )
}

export default App;