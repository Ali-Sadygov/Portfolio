import ProjectsComponent from '../../components/ProjectComponent'
import led from './assets/images/led.jpg'

export default function Projects() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12-lg">
                        <h1 className='fs-1 pt-4 pb-3' style={{color: "#FF8303"}}>／Project</h1>
                        <h1>List of my projects</h1>
                        <div className='col-12-md d-flex flex-wrap align-items-start pt-4 pb-4'
                            style={{gap: "15px 0px"}}>

                            <ProjectsComponent></ProjectsComponent>

                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}