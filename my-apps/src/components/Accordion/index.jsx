import data from "./data"
import { useState } from "react";
export default function Accordion(){

    const [selected, setSelected] = useState(null);
    const [enableMultiselection, setEnableMultiselection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId){
        let copMultiple = [...multiple];
        const findIndexOfCurrentId = copMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1) copMultiple.push(getCurrentId);
        else copMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copMultiple);
    }

    return (
        <div className="acc-wrapper">
            <button onClick={() => setEnableMultiselection(!enableMultiselection)}>Enable Multi-Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMultiselection 
                            ? () => handleMultipleSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)}  className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            <div>
                                {
                                    enableMultiselection
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="acc-content">{dataItem.answer}</div>
                                    )
                                    : selected === dataItem.id && (
                                        <div className="acc-content">{dataItem.answer}</div>
                                    )
                                }
                            </div>
                        </div>
                    </div>)
                    : <div>No data found</div>
                }
            </div>
        </div>
    )
}