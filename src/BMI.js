import { useRef, useState } from "react"

const UserInput = ({Referent ,inputID, inputLabel, inputPlaceholder, inputUnit}) => {
    return(
        <div className="input-group">
            <label for={inputID}>{inputLabel}</label>
            <input ref={Referent} id={inputID} type='text' placeholder={inputPlaceholder}/>
            {inputUnit}
        </div>
    )
}

const BMI = () => {
    const weightRef = useRef(null);
    const heightRef = useRef(null);
    const [Bmi, setBmi] = useState(0)
    const calculateBMI = () => {
        if(weightRef.current.value && heightRef.current.value){
            setBmi(weightRef.current.value / Math.pow(heightRef.current.value/100, 2))
        }
    }
    return(
        <div className='container'>
            <h1>โปรแกรมคำนวณค่า BMI</h1>
            <UserInput Referent={weightRef} inputID='weight' inputLabel='น้ำหนัก' inputPlaceholder='กรุณาใส่น้ำหนัก (กก.)' inputUnit='กิโลกรัม'/>
            <UserInput Referent={heightRef} inputID='height' inputLabel='ส่วนสูง' inputPlaceholder='กรุณาใส่ส่วนสูง (ซม.)' inputUnit='เซนติเมตร'/>
            <button onClick={()=>calculateBMI()}>คำนวณ</button>
            <p>ค่า BMI ของคุณ คือ {Bmi.toFixed(2)} อยู่ในระดับ {Bmi < 18.5 ? 'ต่ำกว่าเกณฑ์' : Bmi > 30 ? 'เกินเกณฑ์' : 'ปกติ'}</p>
        </div>
    )
}

export default BMI