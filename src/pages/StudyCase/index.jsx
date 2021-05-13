import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { cases } from '../../data/cases';
import Display from '../../components/Display/index';
;


function StudyCase() {

    const { nameSlug } = useParams();
    const [currentCase, setCurrentCase] = useState(undefined)

    useEffect(() => {
  
        const foundCase = cases.find((cases) => cases.name + "-study-case" === nameSlug);
        setCurrentCase(foundCase);
    }, [nameSlug])
    if (currentCase === undefined) {
        return (
            <div className="alert alert-warning"  role="alert">
                Aucun projet n'est sélectionné !
            </div>
        );
    }
    
    else{
        return(
            <div>
                <Display markdownValue = {currentCase.title} />
                <p>{currentCase.description}</p>
                <p style={{fontSize: "12px", color: "red"}}>{currentCase.name}</p>
           </div>
        );
          }
        }


    export default StudyCase;