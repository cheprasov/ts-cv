import React from 'react';
import { AwardInf } from '../../type/cv';
import SafeHtml from '../html/SafeHtml';
import Time from '../date/Time';
import * as Article from '../article';
import * as Details from '../details';

import './Award.scss';

interface AwardProps {
    award: AwardInf;
}

const LOGO_AWARD = 'award.jpeg';

const Award = ({ award }: AwardProps) => {
    const { title, organizer, description, date, logo } = award;

    return (
        <Article.Wrapper>
            <Details.Wrapper>
                <Details.Summary pointer>
                    <Article.Logo>{logo || LOGO_AWARD}</Article.Logo>
                    <Article.Title>{title}</Article.Title>
                    <Article.Subtitle>by {organizer} in <Time dates={date} /></Article.Subtitle>
                </Details.Summary>
                <Article.Content>
                    <SafeHtml>{description}</SafeHtml>
                </Article.Content>
            </Details.Wrapper>
        </Article.Wrapper>
    );
};

export default Award;
