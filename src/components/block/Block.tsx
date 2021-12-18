import React from 'react';

import * as Details from '../details';

import './Block.scss';

interface BlockProps {
    children: React.ReactElement | string[];
    title?: string;
}

const Block = ({ title, children }: BlockProps): React.ReactElement | null => {
    if (!title) {
        return (
            <section className="Block">
                {children}
            </section>
        );
    }
    return (
        <section className="Block">
            <Details.Wrapper open>
                <Details.Summary pointer>
                    <h2 className="Block__header">{title}</h2>
                </Details.Summary>
                <Details.Content leftPadding>
                    {children}
                </Details.Content>
            </Details.Wrapper>
        </section>
    );
};

export default Block;
