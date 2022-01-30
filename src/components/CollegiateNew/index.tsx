import React from 'react';

import { 
    Container,
    PostedDate,
    PostedContent,
    HeartIcon,
    Likes,
    InteractWrapper,
} from './styles';

interface Props {
    date: string;
    content: string;
    liked: boolean;
    likes: number
}

export function CollegiateNew({date, content, liked, likes, ...props}: Props) {
    return(
        <Container {...props}>
            <PostedDate>{date}</PostedDate>
            <PostedContent>{content}</PostedContent>
            <InteractWrapper>
                <HeartIcon name={liked ? "heart" : "heart-outline"} state={liked}/>
                <Likes>{likes}</Likes>
            </InteractWrapper>
        </Container>
    )
}
