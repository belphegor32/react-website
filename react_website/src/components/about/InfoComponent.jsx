import React from 'react';

function Info(){
    return (
        <div className="about__info grid">
            <div className="about__box">
                <h3 className="about__title">Occupation</h3>
                <span className="about__subtitle">Currently I am a highschool student</span>
            </div>

            <div className="about__box">
                <h3 className="about__title">Problem solving</h3>
                <span className="about__subtitle">I enjoy solving programming problems</span>
            </div>

            <div className="about__box">
                <h3 className="about__title">Languages</h3>
                <span className="about__subtitle">I also like language learning Russian(native) English(fluent), Chinese(HSK4)</span>
            </div>
        </div>
    )
}

export default Info