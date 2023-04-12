// import example from './csv/example.csv'
import { useEffect, useState } from "react"
import Papa from 'papaparse';
import StopWatch from "./StopWatch";
import { useNavigate } from "react-router-dom";
import "./password.css";


export default function Password() {
    const navigate = useNavigate()
    const [inputvalue, setInputValue] = useState("")
    const [stop, setStop] = useState(false)
    const [success, setSuccess] = useState(false)

    const dataCheck = () => {
        Papa.parse(process.env.PUBLIC_URL + '/csv/example.csv', {
            download: true,
            header: true,
            complete: function (results, file) {
                // results.data contains an array of objects, each representing a row in the CSV file
                // You can access the content of a specific cell using its index or its column name

                // cell content:
                console.log(results.data[1]['password']);

                if (inputvalue === results.data[1]['password']) {
                    // success
                    console.log("The variable matches the content of the cell!");
                    setStop(true);
                    setSuccess(true);
                } else {
                    // wrong input value
                    console.log("The variable isn't matches ");
                    alert("נא לכתוב את המילים שבקובץ")
                }
            },
            error: function (error, file) {
                console.log("Error while deeling a csv:", error);
            }
        });
    }

    const continueToAudio = () => {
        if (success) {
            navigate("/audio")
        } else {
            alert(" נא לכתוב את המילים שבקובץ וללחוץ Check להמשך")
        }
    }
    return (
        <div id="all">
            <div id="password-container">
                <input type="text"
                    onChange={(e) => setInputValue(e.target.value)} />

                <button class="button-36" role="button"
                    onClick={() => dataCheck()}>
                    בדיקה
                </button>
                <StopWatch stop={stop} />
            </div>
            <button class={success ? "button-36" : "disable-button"} role="button"
                onClick={() => continueToAudio()}>
                המשך
            </button>
        </div>
    )
}