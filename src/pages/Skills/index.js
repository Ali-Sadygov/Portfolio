import 'bootstrap/dist/css/bootstrap.min.css';
import style from './assets/css/style.module.css'
import '../../assets/css/reset.css'
import SkillsComponent from '../../components/SkillsComponent';

export default function Skills() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12-lg pb-3'>
                        <h1 className={"m-3 fs-1 " + style.skills}>
                            ／Skills
                        </h1>
                        <div className='col-12-md d-flex flex-wrap ' 
                            style={{alignItems: "baseline", gap: "15px 0px"}}>
                            <SkillsComponent></SkillsComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}