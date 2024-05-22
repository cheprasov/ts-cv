import React from 'react';
import { convertToHTML } from '../../utils/reactUtils';

export interface SafeHtmlProps {
    children: string | string[];
}

const SafeHtml: React.FunctionComponent<SafeHtmlProps> = ({ children }) => {
    return (
        <span className="SafeHtml">
            {convertToHTML(children)}
        </span>
    );
}

export default SafeHtml;