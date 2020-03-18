import React from 'react';
import { CVInf } from '../../type/cv';
import { prepareLink } from '../../utils/reactUtils';

import './Profile.scss';

interface ProfileProps {
    cv: CVInf;
    showContacts: boolean;
}

const Profile = ({ cv, showContacts }: ProfileProps) => {
    const { profile } = cv;
    const { firstName, lastName, headline, postCode, city, country } = profile;

    const lines = [];
    lines.push(['Phone', cv.contacts.phone]);
    lines.push(['Email', cv.contacts.email]);
    lines.push(['LinkedIn', cv.links.linkedin]);
    lines.push(['GitHub', cv.links.github]);
    lines.push(['Location', `${postCode}, ${city}, ${country}`]);

    const contacts = lines.map((line: string[]) => {
        return (
            <div key={line[0]}>
                {prepareLink(line[1])}
            </div>
        );
    });

    return (
        <section className="Profile">
            <div className="Profile__info">
                <div className={`Profile__name ${showContacts ? '' : 'Profile__name--hidden no-print'}`}>
                    {firstName} {lastName}
                </div>
                <div className="Profile__headline">{headline}</div>
            </div>
            <div className={`Profile__contacts ${showContacts ? '' : 'Profile__contacts--hidden no-print'}`}>
                {contacts}
            </div>
        </section>
    );
};

export default Profile;
