import React from 'react';

export default class Summary extends React.Component {

    getCV() {
        return this.props.cv;
    }

    getInfo() {
        const CV = this.getCV();
        let i = 0;
        return CV.about.short.map(
            (line) => {
                return <p key={'block-about-p-' + (i++)}>{line}</p>;
            }
        );
    }

    render() {
        return (
            <div className="summary justify">
                {this.getInfo()}
            </div>
        );
    }
}
