import React from 'react';

export default class Profile extends React.Component {
    render() {
        const CV = this.props.cv;
        const profile = CV.profile || {};

        const lines = [];
        lines.push(['Phone', CV.contacts.phone]);
        lines.push(['Email', CV.contacts.email]);
        lines.push(['Linkedin', CV.links.linkedin]);
        lines.push(['GitHub', CV.links.github]);

        const contacts = lines.map(
            (arg) => {
                let value = '';
                if (/^http(s?):\/\//.test(arg[1])) {
                    value = (<a href={arg[1]} target="_blank">{arg[1].replace(/^http(s?):\/\//, '')}</a>);
                } else if (/.+@.+\.[a-z]{2,}$/.test(arg[1])) {
                    value = (<a href={"mailto:" + arg[1]}>{arg[1]}</a>);
                } else {
                    value = arg[1];
                }
                return (
                    <div key={arg[0]}><nobr>{value}</nobr></div>
                );
            }
        );

        return (
            <div className="profile">
                <h1 className="name">{profile.first_name} {profile.last_name}</h1>
                <div className="info">{contacts}</div>
            </div>
        );
    }
}
