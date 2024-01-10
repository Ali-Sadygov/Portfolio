export default function Experience({
    data,
    name,
    about,
    skills
}) {
    return(
        <>
            <div className="col-md-6 mt-4 mb-4">
                <div className='d-flex'>
                    <div className="col-md-4 d-flex align-items-center">
                        <p style={{fontSize: "1.1em", letterSpacing: "2px"}}>
                            {data}
                        </p>
                    </div>
                    <div className="col-md-8 d-flex flex-column gap-3 ps-3 pb-2">
                        <div>
                            <p className='fs-2'>
                                {name}
                            </p>
                        </div>
                        <div>
                            <p style={{letterSpacing: "1px"}}>
                                {about}
                            </p>
                        </div>
                        <div className='d-flex gap-2 flex-wrap'>
                            {
                                Array.isArray(skills) &&
                                    skills.map((skill, index) => 
                                        <div 
                                        key={index} 
                                        style={{backgroundColor: "#FF8303", fontSize: "0.9em", padding: "8px 10px"}} 
                                        className='text-black rounded-pill d-flex align-items-center text-center'>
                                            {skill}
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}