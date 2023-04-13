import { useState } from 'react'
import './audio.css'

export default function AudioPlayer() {
    const [showImg, setShowImg] = useState(false)
    const heard = () => {

    }

    return (
        <div id="audio-container">
            <audio controls autoPlay id='player'
                src="/audio/Vladimir_edoseev_State_Academic_Large_Symphony_Orchestra_Georgijj_Vasilevich_Sviridov_-_The_Snowstorm_II_Waltz_(musmore.com).mp3">
            </audio>
            <button className='button-36'
                onClick={() => setShowImg(true)}>
                שמעתי
            </button>
            {showImg && <img src="/img/circle-for-rakefet.png" className='circle-img' />}

        </div>
    )
}   