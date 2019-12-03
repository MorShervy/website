import React from 'react';


const About = props => {

    return (
        <main id="main" role="main">
            <article>
                <header className="intro">
                    <div className="group">
                        <h1>About Mor</h1>
                        <h2>Practical Sowftware Engineer</h2>
                    </div>
                </header>
            </article>
            <div className="content">
                <div className="avatar social">
                    {/* <img src={require('../images/morprofile.jpg')} width="140" height="140" alt="Mor profile pic" /> */}
                </div>
            </div>
        </main>
    )
}

export default About;