import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/context' 

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);  //this dangerouslyhtmltag helps in diaplying all the tags that are available in that text
     const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            onSent();
        }
    };
    
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

             {!showResult
             ? <>
             <div className="greet">
                    <p><span>Hello, Developer.</span></p>
                    <p>How can I help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p onClick={() => {onSent("Suggest beautiful places to see on a upcoming road trip")}}>Suggest beautiful places to see on a upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p onClick={() => {onSent("Suggest some good movies to watch this weekend")}}>Suggest some good movies to watch this weekend</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p onClick={() => {onSent("Explain the algorithms used in an AI")}}>Explain the algorithms used in an AI</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p onClick={() => {onSent("Improve the readability of the following code")}}>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
             </>
             : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt='' />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt=''/>
                    {loading
                    ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                          
                </div>
             </div>
             } 
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
