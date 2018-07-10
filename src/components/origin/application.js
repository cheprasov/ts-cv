import React from 'react';
import '/CSS/origin.css';

import CV from '/SRC/cv.json';

import Block from './../block.js';

import Header from './header.js';
import Profile from './profile.js';
import Summary from './summary.js';
import Experience from './experience.js';
import Education from './education.js';
import Projects from './projects.js';
import Awards from './awards.js';


export default class Application extends React.Component {

    constructor() {
        super();
        this.state = {
            hideContacts: false
        };
    }

    /**
     * @param {boolean} hide
     */
    setHideContacts(hide) {
        this.setState({hideContacts: hide});
    }

    getConfig() {
        return {
            hideContacts: this.state.hideContacts,
        };
    }

    render() {
        return (
            <div className="application application-origin">
                <Header cv={CV} application={this} config={this.getConfig()} />
                <Block>
                    <Profile cv={CV} config={this.getConfig()} />
                </Block>
                <Block title="Summary & Skills">
                    <Summary cv={CV} config={this.getConfig()} />
                </Block>
                <Block title="Visa requirements">
                    {CV.requirements}
                </Block>
                <Block title="Experience">
                    <Experience data={CV.experience} />
                </Block>
                <Block title="Education">
                    <Education data={CV.education} />
                </Block>
                <Block title="Personal Projects">
                    <Projects data={CV.projects} />
                </Block>
                <Block title="Honors & Awards">
                    <Awards data={CV.awards} />
                </Block>
            </div>
        );
    }
}
