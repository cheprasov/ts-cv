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

import './Application.scss';

interface ApplicationProps {
    cv: CVInf;
}

const Application = ({ cv }: ApplicationProps) => {

    const [isContactsVisible, setContactsVisibility] = useState<boolean>(true);

    const onChangeContactVisibility = (visibleContacts: boolean) => {
        setContactsVisibility(visibleContacts);
    };

    return (
        <div className="Application">
            <Header
                cv={cv}
                onChangeContactVisibility={onChangeContactVisibility}
                showContacts={isContactsVisible}
            />
            <Block>
                <Profile
                    cv={cv}
                    showContacts={isContactsVisible}
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
    );
};

export default Application;
