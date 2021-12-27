import React from 'react';
import { convertToHTML } from '../../utils/reactUtils';

export interface SafeHtmlProps {
    children: string | string[];
}

const SafeHtml: React.FunctionComponent<SafeHtmlProps> = ({ children }) => {
    return (
        <div className="SafeHtml">
            {convertToHTML(children)}
        </div>
    );
}

export default SafeHtml;