import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { useGlobalScope } from '@cheprasov/react-global-state';
import { AppScope } from '../../globalState';
import { CVInf } from '../../type/cv';
import { prepareLink } from '../../utils/reactUtils';

import './Profile.scss';

interface ProfileProps {
    cv: CVInf;
}

const copyToClipboard = (text: string): Promise<void> => {
    return navigator.clipboard.writeText(text);
}

const Profile = ({ cv }: ProfileProps) => {
    const [ showContacts ] = useGlobalScope<AppScope>('app').showContacts;
    const { profile } = cv;
    const { firstName, lastName, headline, postCode, city, country } = profile;

    const contacts = useMemo(() => {
        const lines = [];
        lines.push(['Phone', cv.contacts.phone, cv.contacts.phone.replace(/ /g, '')]);
        lines.push(['Email', cv.contacts.email]);
        lines.push(['LinkedIn', cv.links.linkedin]);
        lines.push(['GitHub', cv.links.github]);
        lines.push(['Location', `${postCode}, ${city}, ${country}`]);

        return lines.map((line: string[]) => {
            const onClick = () => {
                copyToClipboard(line[2] || line[1]);
            }
            return (
                <div className='Profile__contactItem Profile__contactItem--copiable' key={line[0]}>
                     <FontAwesomeIcon
                        onClick={onClick}
                        title={`Copy ${line[0]} to Clipboard`}
                        icon={faCopy}
                    />
                    {prepareLink(line[1])}
                </div>
            );
        });
    }, []);

    return (
        <section className="Profile">
            <div className="Profile__info">
                <div
                    className={`Profile__name ${showContacts ? '' : 'Profile__name--hidden no-print'}`}>
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
