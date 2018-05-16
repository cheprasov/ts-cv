import React from 'react';
import ReactDOM from 'react-dom';

import Meta from './meta.js';
import Block from './block.js';
import Profile from './profile.js';
import Summary from './summary.js';
import Experience from './experience.js';
import Education from './education.js';
import Projects from './projects.js';
import Awards from './awards.js';

import CV from './../cv.json';

export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Meta cv={CV} />
                <Block content={<Profile cv={CV} />} />
                <Block title="Summary & Skills" content={<Summary cv={CV} />} />
                <Block title="Visa requirements" content={CV.requirements} />
                <Block title="Experience" content={<Experience data={CV.experience} />} />
                <Block title="Education" content={<Education data={CV.education} />} />
                <Block title="Personal Projects" content={<Projects data={CV.projects} />} />
                <Block title="Honors & Awards" content={<Awards data={CV.awards} />} />
            </div>
        );
    }
}
