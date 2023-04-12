import { useEffect, useRef, useState } from "react"

export default function StopWatch(props) {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(true);
    const [showTime, setShowTime] = useState(false);
    const timer = useRef()

    const format = () => {
        let hours = Math.floor(time / 60 / 60 % 24);
        let minutes = Math.floor(time / 60 % 60);
        let seconds = Math.floor(time % 60);
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return `${hours}:${minutes}:${seconds}`
    }

    useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(timer.current)
    }, [running])

    useEffect(() => {
        if (props.stop) {
            setRunning(false)
            setShowTime(true)
        }
    }, [props.stop])

    return (

        <div>
            {showTime &&
                <div>
                    <p>
                        {format(time)}
                    </p>
                </div>

            }

        </div>
    )
}