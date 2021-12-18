import React from 'react';
import { convertToHTML } from '../../utils/reactUtils';

export interface SafeHtmlProps {
    children: string;
}

const SafeHtml: React.FunctionComponent<SafeHtmlProps> = ({ children }) => {
    return convertToHTML(children);
}

export default SafeHtml;