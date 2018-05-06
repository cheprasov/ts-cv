import React from 'react';

import DateTime from './../utils/date-time.js';

export default class Profile extends React.Component {
    render() {
        let CV = this.props.cv;
        let profile = CV.profile || {};

        let DateBirth = new DateTime(profile.date_birth);

        let info = [
            ['Age', `${DateBirth.getPeriod(null, false)} / ${DateBirth.getFormatDate('%d.%m.%Y')}`],
            ['Phone', CV.contacts.phone],
            ['Email', CV.contacts.email],
            ['Linkedin', CV.links.linkedin],
            ['Current', CV.experience[0].company],
        ].map(
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
