import React, { useState, useRef } from "react";
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState(20)
    const [checkboxValues, setCheckboxValues] = useState([]);
    const lengthTextBoxRef = useRef(null)

    function isEmptyArray(array) {
        return Array.isArray(array) && array.length === 0
    }

    function handleItemControlerState(name, checked) {
        const serialNumberLength = parseInt(lengthTextBoxRef.current.value)// 20

        function initCheckBoxStates() {
            return ((isEmptyArray(checkboxValues)) || checked) ? (
                [...checkboxValues, { itemName: name, checkBoxState: new Array(serialNumberLength).fill(false) }]
            )
                : checked === false ? (
                    checkboxValues.filter((item) => (item.itemName !== name))
                )
                    : (
                        [...checkboxValues]
                    )

        }

        const initCheckValues = initCheckBoxStates()
        setCheckboxValues(initCheckValues)
    }

    function handleCheckboxChange(event, itemName, index) {
        const newValues = checkboxValues.map(item => {
            if (item.itemName === itemName) {
                return {
                    ...item,
                    checkBoxState: item.checkBoxState.map((isChecked, idx) => {
                        if (idx === index) {
                            return event.target.checked;
                        }
                        return isChecked;
                    })
                };
            }
            return item;
        });
        setCheckboxValues(newValues);
    }
    return (
        <div>
            <input type="checkbox" value="item1" onChange={(event) => { handleItemControlerState("item1", event.target.checked) }}></input><span>item1</span>
            <input type="checkbox" value="item2" onChange={(event) => { handleItemControlerState("item2", event.target.checked) }}></input><span>item2</span>
            <input
                type="text"
                style={{ margin: "20px", textAlign: "right" }}
                value={inputValue}
                ref={lengthTextBoxRef}
                onChange={(event) => { setInputValue(event.target.value) }}
                onBlur={(event) => {
                    const length = parseInt(event.target.value)
                    const newCheckBoxStates = checkboxValues.map((item) => {
                        const beforeLength = item.checkBoxState.length
                        return (length !== beforeLength) ? (
                            (length > beforeLength) ? (
                                { ...item, checkBoxState: item.checkBoxState.concat(new Array(length - item.checkBoxState.length).fill(false)) }
                            )
                                : (
                                    { ...item, checkBoxState: item.checkBoxState.slice(0, length) }
                                )
                        ) : item
                    })
                    setCheckboxValues(newCheckBoxStates)
                }
                }
            />
            {checkboxValues.map((item) => (
                <div key={item.itemName}>
                    <h2>{item.itemName}</h2>
                    <ul>
                        {item.checkBoxState.map((isChecked, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        value={`$checkBox${index + 1}`}
                                        onChange={event => {
                                            handleCheckboxChange(event, item.itemName, index)
                                        }}
                                    />
                                    Checkbox {index + 1}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </ div>
    );
}

export default App;

