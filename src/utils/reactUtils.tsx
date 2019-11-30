import React, { Fragment } from 'react';
import { getUrlWithoutScheme, isEmail, isString, isUrl } from './stringUtils';

export type ReactElementStringType = React.ReactElement | string;

export const prepareLink = (text: string): React.ReactElement => {
    if (isUrl(text)) {
        return (
            <a href={text} rel="noopener noreferrer" target="_blank">
                {getUrlWithoutScheme(text)}
            </a>
        );
    }

    if (isEmail(text)) {
        return (
            <a href={`mailto:${text}`} rel="noopener noreferrer">{text}</a>
        );
    }

    return (<>{text}</>);
};

export const pushElementOrString = (list: ReactElementStringType[], item: ReactElementStringType) => {
    const isStrings = list.length > 0 && isString(list[list.length - 1]) && isString(item);
    if (isStrings) {
        (list[list.length - 1] as string) += (item as string);
    } else {
        list.push(item);
    }
};

export const mergeElementString = (list: ReactElementStringType[]) => {
    return list.map((word: string | React.ReactElement, index: number) => {
        return (<Fragment key={index}>{word}</Fragment>);
    });
};

export const convertToHTML = (text: string | string[]): React.ReactElement => {
    const lines = Array.isArray(text) ? text : [text];

    const words: ReactElementStringType[] = [];

    lines.forEach((line: string, index: number) => {
        if (index > 0) {
            pushElementOrString(words, <br />);
        }
        line.split(/ +/).forEach((word: string, i: number) => {
            if (i > 0) {
                pushElementOrString(words, ' ');
            }
            if (isEmail(word) || isUrl(word)) {
                pushElementOrString(words, prepareLink(word));
            } else {
                pushElementOrString(words, word);
            }
        });
    });

    return (<>{mergeElementString(words)}</>);
};
