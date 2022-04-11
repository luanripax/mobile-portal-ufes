import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    likes: number;
}

export function CollegiateNew({date, content, liked, likes, ...props}: Props) {

    const [likedState, setLikedState] = useState(false);
    const [likesState, setLikesState] = useState(likes);

    const handleClickLike = () => {
        setLikedState(oldstate => !oldstate);
        setLikesState(oldAmount => likedState ? oldAmount - 1 : oldAmount + 1);
    }
    
    return(
        <Container {...props}>
            <PostedDate>{date}</PostedDate>
            <PostedContent>{content}</PostedContent>
            <InteractWrapper>
                <TouchableOpacity onPress={handleClickLike}>
                    <HeartIcon name={likedState ? "heart" : "heart-outline"} state={likedState}/>
                </TouchableOpacity>
                <Likes>{likesState}</Likes>
            </InteractWrapper>
        </Container>
    )
}
