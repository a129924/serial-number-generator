import React, { useState } from "react";
import './App.css';

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

const InputRow = (props) => {
  const [regexValue, setRegexValue] = useState("")
  const [isEditable, setIsEditable] = useState(true);

  return (
    <div className="labelitem" key={`labelitem`}>
      <div className="label">
        <label>{props.labelName}</label>
      </div>
      <div className="textbox">
        <input
          type="text"
          onChange={(e) => {
            setRegexValue((value) => (e.target.validity.valid ? e.target.value : value));
          }}
          placeholder={props.placeholder}
          pattern={props.pattern}
          value={regexValue}
          onBlur={props.onBlur}
          disabled={!isEditable}
        />
      </div>
      <div className="checkbox">
        {props.shouldRenderCheckbox && (
          <input type="checkbox" name="check" defaultChecked={true} onChange={(event) => {
            setIsEditable(event.target.checked);
          }} />
        )
        }
        {props.shouldRenderCheckbox && <span>啟用</span>}
      </div>
    </div>
  )
}

const InputForm = (props) => {
  return <form>{props.children}</form>

}

const CheckBox = (key) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <input key={key} type="checkbox" checked={isChecked} onChange={(event) => {
      setIsChecked(event.target.checked)
    }}></input>
  )


}

const CheckBoxRowForm = (props) => {
  const labels = [<label key={"titleLabel"}>{""}</label>].concat(Array.from({ length: props.length }, (_, i) => (
    <label key={`titleLabel-${i + 1}`}>{i + 1}</label>
  )))
  const generatorCheckBoxs = (labelName) => {
    const checkBoxGroup = [<label key={`${labelName}`}>{labelName}</label>].concat(Array.from({ length: props.length }, (_, i) => (
      <CheckBox key={`${labelName}-${i + 1}`} />
    )))
    return checkBoxGroup
  }

  const gridColumns = "150px " + Array.from({ length: props.length }, () => '1fr').join(' ');
  return (
    <div className="grid" style={{ gridTemplateColumns: gridColumns }}>
      {labels}
      {generatorCheckBoxs("禁用的數字")}
      {generatorCheckBoxs("禁用的大寫字母")}
      {generatorCheckBoxs("禁用的小寫字母")}
    </div>)
}

// ai寫的


// ai寫的



function App() {
  const [inputValue, setInputValue] = useState(0)
  // 參考用 不能動
  const generatorCheckBoxRowForm = (count) => {
    if (count !== 0) {
      return (
        <CheckBoxRowForm length={count} />
      )
    }
  }

  const handleLengthGenerotorCheckBox = (event) => {
    const newValue = parseInt(event.target.value)
    newValue !== inputValue && (setInputValue(parseInt(event.target.value || 0)));
  }

  return (
    <div className="App">
      <div className="child_div" style={{ flexGrow: "1" }}>
        <div className="center">
          <h1>序號產生器</h1>
        </div>

      </div>
      <div className="child_div" style={{ flexGrow: "3" }}>
        <InputForm>
          <InputRow
            onBlur={(event) => { handleLengthGenerotorCheckBox(event) }}
            labelName="長度"
            placeholder="序號長度"
            pattern="[0-9]{1,2}"
            shouldRenderCheckbox={false}
          />
          <InputRow
            labelName="組數"
            placeholder="序號產生組數"
            pattern="[0-9]{1,8}"
            shouldRenderCheckbox={false}
          />
          <InputRow
            labelName="禁用的數字"
            placeholder="序號禁用的數字"
            pattern="^[0-9](,[0-9])*,?$"
            shouldRenderCheckbox
          />
          <InputRow
            labelName="禁用的大寫英文字母"
            placeholder="序號禁用的大寫英文字母"
            pattern="^[A-Z](,[A-Z])*,?$"
            shouldRenderCheckbox
          />
          <InputRow
            labelName="禁用的小寫英文字母"
            placeholder="序號禁用的大寫英文字母"
            pattern="^[a-z](,[a-z])*,?$"
            shouldRenderCheckbox
          />
        </InputForm>
        
      </div>
      {inputValue !== 0 && (
        <div className="child_div" style={{ display: "grid", flexGrow: "1" }}>
          {generatorCheckBoxRowForm(inputValue)}
        </div>
      )
      }
    </div>

  )
}

export default App;