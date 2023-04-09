import { useState } from "react"
import example from '../public/csv/example.csv'

export default function Password() {
    const [inputvalue, setInputValue] = useState("")
    const dataCheck = async () => {
        const jsonData = await csvtojson().fromString(example);

    }
    return (
        <div>
            <input type="text"
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => dataCheck()}>
                Check
            </button>
        </div>
    )
}