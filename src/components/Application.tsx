import React, { useState } from 'react';
import { CVInf } from '../type/cv';
import Awards from './awards/Awards';
import Block from './block/Block';
import Educations from './educations/Education';
import Experiences from './experiences/Experiences';
import Header from './header/Header';
import Profile from './profile/Profile';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Summary from './summary/Summary';
import { createGlobalScope, useGlobalScope } from '@cheprasov/react-global-state';

import './Application.scss';
import { AppScope, appScope } from '../globalState';

interface ApplicationProps {
    cv: CVInf;
}

const AppSettings = createGlobalScope('app', appScope);

const Application = ({ cv }: ApplicationProps) => {

    const [ isContactsVisible ] = useGlobalScope<AppScope>('app').showContacts;


    return (
        <AppSettings>
            <div className="Application">
                <Header
                    cv={cv}
                />
                <Block>
                    <Profile
                        cv={cv}
                    />
                </Block>
                <Block title="Summary">
                    <Summary cv={cv} />
                </Block>
                <Block title="Skills">
                    <Skills technologies={cv.skills} />
                </Block>
                <Block title="Right to work">
                    {cv.requirements}
                </Block>
                <Block title="Experience">
                    <Experiences experiences={cv.experiences} />
                </Block>
                <Block title="Education">
                    <Educations educations={cv.educations} />
                </Block>
                <Block title="Personal Projects">
                    <Projects projects={cv.projects} />
                </Block>
                <Block title="Honors & Awards">
                    <Awards awards={cv.awards} />
                </Block>
            </div>
        </AppSettings>
    );
};

export default Application;
