import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext)
    // useEffect(() => {
    //     a.update();
    //     // eslint-disable-next-line
    // }, [])
    return (
        <div className='container my-3'>
            This is About {a.name} and he is in class {a.class}    
            <i className="fa-sharp fa-solid fa-trash"></i>                  

        </div>
    )
};

export default About;