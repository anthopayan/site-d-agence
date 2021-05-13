import React from 'react';
import {  Link } from 'react-router-dom';
import { cases } from '../../data/cases';
import Display from '../../components/Display/index';

function Works() {

    function CaseItem ({cases}) {
        const deftitle = cases.title.replace(/#/g, '');
        const resulttitle = deftitle
        const id = cases.name
        const urlprojet = "/works/"+ id + "-study-case"
        return (
            
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body" style={{backgroundColor: "grey"}}>
                <h5 className="card-title">{resulttitle}</h5>
                <Link className="card-link" aria-current="page" to= {urlprojet} >Works</Link>
                
            </div>
        </div>
        
    );
    } 

    return (
        

        <div>
            <Display markdownValue = "### Au fil des années, nous avons pu accompagner les meilleurs." />
                <p>
                    Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
                </p>
                <div className="container">
            {cases.map(cases => <CaseItem cases={cases} key={cases.title} id={cases.name} />)}

            
            </div>
        </div>
        );
    }

    export default Works;