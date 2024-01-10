import Experience from "../../components/Experience";
import { experience, educations } from "./boxs";

export default function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12-lg">
                        <div className="pt-5 pb-5 d-flex flex-column gap-3">
                            <h1 className="fs-1 pb-2" style={{color: "#FF8303"}}>
                                ／About Me
                            </h1>
                            <p style={{letterSpacing: "2px"}}>
                                Who am i?
                            </p>    
                            <p style={{letterSpacing: "2px"}}>
                                I'm Ali Sadygov. I have completed Front-end Bootcamp in the EACAMP . I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            </p>
                        </div>
                        <div>
                            <h1 className="fs-1" style={{color: "#FF8303"}}>
                                ／Experience
                            </h1>
                            {experience.map((props, index) => <Experience key={index} {...props}/>)}
                        </div>
                        <div>
                            <h1 className="fs-1" style={{color: "#FF8303"}}>
                                ／Educations
                            </h1>
                            {educations.map((props, index) => <Experience key={index} {...props}/>)}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}