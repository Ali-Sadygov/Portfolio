import 'bootstrap/dist/css/bootstrap.min.css';
import imageback from './assets/images/backgroundimage.png'
import style from './assets/css/style.module.css'
import '../../assets/css/reset.css'


export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className={'col-12-lg d-flex ' +  style.homepages}>
                        <div className='col-6-md mb-2 text-white d-flex flex-column justify-content-center' style={{gap: "20px"}}>
                            <h1>
                                <span className={style.span1}>I</span>
                                <span className={style.span1}>'</span>
                                <span className={style.span1}>m</span>
                                <span className={style.span1}>Ali</span>
                                <span className={style.span1}>Sadygov</span><br></br>
                                <span className={style.span2}>Front</span>
                                <span className={style.span2}>End</span>
                                <span className={style.span2}>Developer</span>
                            </h1>
                            <p style={{fontSize: "17px"}}>Frontend developer looking for ideas and projects for himself and others</p>
                            <button className='text-white p-3 rounded' style={{fontSize: "14px",backgroundColor: "#1C1B18", border: "solid 1px #FF8303", width: "110px"}}>ABOUT ME</button>
                        </div>
                        <div className='col-6-md d-flex justify-content-center'>
                            <img src={imageback} width={'90%'}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}