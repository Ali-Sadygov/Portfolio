import style from './assets/css/style.module.css'
import { skills } from './boxs'

export default function SkillsComponent () {
    return (
        <>
            {
                skills.map((skill, index)=> (
                    <div key={index} className='col-md-3'>
                        <div className={"p-3 " + style.title}>
                            <p>{skill.name}</p>
                        </div>
                        <div className={"p-3 " + style.skillsdiv}>
                            <p>{skill.language}</p>
                        </div>
                    </div>
                ))
            }
            {console.log(skills[0].name)}
        </>
    )
}
