import { useState, useEffect } from 'react'
import requestPortafoly from '../api/requestsPortafolyApi';

export const RequestInfoPortafoly = () => {
    const [isLoading, setIsLoading] = useState();
    const [infoPortafoly, setinfoPortafoly] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);

                /* Ejecuta multiple promesas de consulta al api*/
                const [infoEducation, infoExperience, infoSkills, infoProject] = await Promise.all([
                    requestPortafoly.get('/education'),
                    requestPortafoly.get('/experience'),
                    requestPortafoly.get('/skills', { headers: { 'Cache-Control': 'no-cache' } }),
                    requestPortafoly.get('/projects'),
                ]);

                /* asignamos los valores que llegan del api */
                const dataEducation = infoEducation.data.content;
                const dataExperience = infoExperience.data.content;
                const dataSkills = infoSkills.data.content;
                const dataProjects = infoProject.data.content;


                /* seteamos la informacion al state del portafolio*/
                setinfoPortafoly({
                    dataEducation,
                    dataExperience,
                    dataSkills,
                    dataProjects
                });
            } catch (error) { console.log(error) }
            finally { setIsLoading(false) }
        }
        fetchData();
    }, []);

    return {
        infoPortafoly,
        isLoading,
    }
}
