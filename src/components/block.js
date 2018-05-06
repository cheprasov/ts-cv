import React from 'react';

let keyI = 0;

export default class Block extends React.Component {
    render() {
        let title = '';
        if (this.props.title) {
            title = <h2>{this.props.title}</h2>;
        }

        let content = '';
        if (Array.isArray(this.props.content)) {
            content = this.props.content.map(
                (line) => {
                    return <p key={'block-p-' + (keyI++)}>{line}</p>;
                }
            );
        } else {
            content = this.props.content;
        }
        return (
            <div className="block">
                {title}
                {content}
            </div>
        );
    }
}
