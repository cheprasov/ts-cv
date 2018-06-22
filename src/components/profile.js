import React from 'react';

import DateTime from './../utils/date-time.js';

export default class Profile extends React.Component {
    render() {
        const hideContacts = this.props.config.hideContacts || false;
        const CV = this.props.cv;
        const profile = CV.profile || {};
        const DateBirth = new DateTime(profile.date_birth);

        const lines = [];
        if (!hideContacts) {
            lines.push(['Age', `${DateBirth.getPeriod(null, false)} / ${DateBirth.getFormatDate('%d.%m.%Y')}`]);
            lines.push(['Phone', CV.contacts.phone]);
            lines.push(['Email', CV.contacts.email]);
            lines.push(['Linkedin', CV.links.linkedin]);
        } else {
            lines.push(['Age', `${DateBirth.getPeriod(null, false)}`]);
        }

        //if (CV.experience[0].date_end === 'now' || (Date.now() < (new Date(CV.experience[0].date_end)).getTime())) {
        //    lines.push(['Current', CV.experience[0].company]);
        //} else {
        //    lines.push(['Last work', CV.experience[0].company]);
        //}
        if (profile.status) {
            lines.push(['Status', profile.status]);
        }

        const info = lines.map(
            (arg) => {
                let value = '';
                if (/^http(s?):\/\//.test(arg[1])) {
                    value = (<a href={arg[1]} target="_blank">{arg[1]}</a>);
                } else if (/.+@.+\.[a-z]{2,}$/.test(arg[1])) {
                    value = (<a href={"mailto:" + arg[1]}>{arg[1]}</a>);
                } else {
                    value = arg[1];
                }
                return (
                    <div key={arg[0]} className="row">
                        <div className="column left">{arg[0]}</div>
                        <div className="column right">{value}</div>
                    </div>
                );
            }
        );

        if (hideContacts) {
            return (
                <div className="profile">
                    <div className="name">{profile.headline}</div>
                    <div className="headline">{profile.city}, {profile.country}</div>
                    <div className="info">{info}</div>
                    <div>&nbsp;</div>
                </div>
            );
        }

        return (
            <div className="profile">
                <div className="block-right">
                    <div className="name">{profile.first_name} {profile.last_name}</div>
                    <div className="headline">{profile.headline}</div>
                    <div className="country">{profile.city}, {profile.country}, {profile.post_code}</div>
                    <div className="info">{info}</div>
                </div>
                <img className="photo" src={'./imgs/' + profile.photo_url} />
            </div>
        );
    }
}
