import 'bootstrap/dist/css/bootstrap.min.css';
import linkedinLogo from './assets/images/icons8-linkedin.svg'
import githubLogo from './assets/images/icons8-github.svg'
import logo from "./assets/images/logoAli.png"
import style from './assets/css/style.module.css'

export default function Footer() {
    return (
        <>
            <div className='container ' style={{color: "white"}}>
                <div className='row'>
                    <div className={style.respons} style={{display: "flex", borderTop: "solid #FF8303 1px", paddingTop: "35px"}}>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-start'>
                                <div className='d-flex align-items-center'>
                                    <img src={logo} width={"55px"} height={"50px"}></img>
                                    <p style={{fontSize: "18px"}}>Ali&nbsp; &nbsp;</p>
                                </div>
                                <div>
                                    <p className='mt-3'>alisadygov.dev@gmail.com</p>
                                </div>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <p style={{fontSize: "17px"}}>Front End Developer</p>
                            </div>
                        </div>
                        <div className={'col-md-6 d-flex p-3' + style.media} style={{justifyContent: 'flex-end'}}>
                            <div style={{marginBottom: "10px"}}>
                                <div>
                                    <p style={{fontSize: "1.3em"}} className='fw-bold'>Sosial Media</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <a href='https://github.com/Ali-Sadygov' target='_blank'><img src={githubLogo} width={"30px"}></img></a>
                                    <a href='https://www.linkedin.com/in/alisadygov/' target='_blank'><img src={linkedinLogo} width={"30px"}></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 mb-4'>
                        <p style={{fontSize: "16px"}} className='text-center'>©  Copyright  2024.   Made  by  Ali</p>
                    </div>
                </div>
            </div>
        </>
    )
}