import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './assets/css/style.module.css'
import image from './assets/images/logoAli.png'
import menu from './assets/images/burgerMenu.svg'
import linkedin from './assets/images/linkedinLogo.svg'
import github from './assets/images/githubLogo.svg'
import { Link } from 'react-router-dom';
import { navlist } from './listtext';
import List from './list';


export default function Header() {

    const [click, setClick] = useState(true)

    const changeClick = () => {
        setClick(!click)
    }
    
    console.log("benimgostericim:",click)

    return (
        <>
            <div className='container text-white pb-2 pt-4 px-4' style={{backgroundColor:"#1E1D1A"}}>
                <div className='row' style={{margin: "5px 0px"}}>
                    <div className='col-12-lg d-flex justify-content-between aligns-items-center'>
                        <div className='col-6-md d-flex aligns-items-center cursor-pointer' style={{cursor: "pointer"}}>
                            <Link to='/' className={style.logo}>
                                <img src={image} width={'55px'} height={'50px'} style={{marginBottom: "5px"}}/>
                                <p className='mt-3' style={{fontSize: "20px"}}>Ali</p>
                            </Link>
                        </div>
                        <div className='col-6-md d-flex align-items-center'>
                            <button onClick={changeClick} 
                                style={{background: "none",border: "solid 1px #1E1D1A"}} 
                                className={style.hiddenBtn}>
                                <img src={menu} width={"50px"} height={"50px"} className='pb-3'/>
                            </button>
                            <ul className='d-flex list-unstyled gap-5 aligns-items-center' >
                                {navlist.map((nav, index) => <List props={{nav, index}}></List>)}
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottomMenu} style={{display: click ? "none" : "block"}}>
                <div>
                    <ul className='list-unstyled'>
                        <Link to={'/'} onClick={changeClick} className={style.popapnav}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/About'} onClick={changeClick} className={style.popapnav}>
                            <li>About</li>
                        </Link>
                        <Link to={'/Skills'} onClick={changeClick} className={style.popapnav}>
                            <li>Skills</li>
                        </Link>
                        <Link to={'/Projects'} onClick={changeClick} className={style.popapnav}>
                            <li>Projects</li>
                        </Link>
                    </ul>
                </div>
                <div className='mt-4'>
                    <a href='https://github.com/Ali-Sadygov' target='_blanket'>
                        <img src={github} width={"80px"}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/alisadygov/' target='_blanket'>
                        <img src={linkedin} width={"80px"}></img>
                    </a>
                </div>
            </div>
        </>
    )
}