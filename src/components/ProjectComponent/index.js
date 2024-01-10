import { projects } from "./boxs"

export default function ProjectsComponent() {
    return (
        <>
            {
                projects.map((project, index) => (
                    <div key={index} className="col-md-4" style={{padding: "0px 15px 0px 0px"}}>
                        {
                            project.img ? <div style={{border: "solid #FF8303 1px"}}>
                                        <img src={project.img} style={{width: "100%"}}/>
                                    </div> : <></>
                        }
                        
                        <div className='p-2 lh-sm' style={{border: "solid #FF8303 1px"}}>
                            <p>{project.prlanguage}</p>
                        </div>
                        <div style={{border: "solid #FF8303 1px", padding: "19px 19px 5px 22px"}}>
                            <p className='fs-4 mb-2'>
                                {project.title}
                            </p>
                            <p>
                                {project.about}
                            </p>
                            <div className='pt-2 pb-3 d-flex' style={{gap: "10px"}}>
                                <button className="bg-transparent rounded text-white" 
                                    style={{padding: "9px 15px",border: "solid #FF8303 1px"}}>
                                        <a className="text-white" style={{textDecoration: "none"}}
                                            href={project.github} target="_blank">
                                            GITHUB
                                        </a>
                                </button>
                                <button className="bg-transparent rounded text-white" 
                                    style={{padding: "9px 15px",border: "solid gray 1px"}}>
                                        <a className="text-white" style={{textDecoration: "none"}} 
                                            href={project.live} target="_blank">
                                            LIVE
                                        </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </>
    )
}