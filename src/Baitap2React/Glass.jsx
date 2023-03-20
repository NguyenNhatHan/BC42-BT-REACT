import React, {useState} from 'react'
import style from './style.module.css'

function Glass() {
    const [glassUrl, setGlassUrl] = useState("")
    return (
        <div className={style.backgroundColor}>
            <h3 className='text-center text-light p-4' style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>TRY GLASSES APP ONLINE</h3>
            <div className='container-fluid mt-5 text-center'>
                <img className={style.model1} src="./img/model.jpg" alt="" width="220px" height="290px" />
                <img className={style.model2} style={glassUrl ? {display: "block"} : {display: "none"}} src={glassUrl} width="70px" height="35px"></img>

            </div>
            <div className="container mt-4">
                <div className="row d-flex bg-white">
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v1.png")}>
                        <img src="./img/g1.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v2.png")}>
                        <img src="./img/g2.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v3.png")}>
                        <img src="./img/g3.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v4.png")}>
                        <img src="./img/g4.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v5.png")}>
                        <img src="./img/g5.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v6.png")}>
                        <img src="./img/g6.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v7.png")}>
                        <img src="./img/g7.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v8.png")}>
                        <img src="./img/g8.jpg" alt="" width="100px" />
                    </div>
                    <div className="col-sm" onClick={() => setGlassUrl("./img/v9.png")}>
                        <img src="./img/g9.jpg" alt="" width="80px" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Glass