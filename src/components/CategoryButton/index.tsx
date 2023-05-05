import React, { FC } from 'react';

import { Container, Title, Icon, ContentWrapper } from './styles';

import { SvgXml } from 'react-native-svg';

import Clipboard from '../../assets/clipboard.svg';
import Printer from '../../assets/printer.svg';
import FingerPrint from '../../assets/fingerprint.svg';
import Calendar from '../../assets/calendar.svg';
import Books from '../../assets/books.svg';
import Subject from '../../assets/subjects.svg';

//https://pixelied.com/convert/png-converter/png-to-svg

const registryxml = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
<g><path style="opacity:0.85" fill="#fcb544" d="M 8.5,0.5 C 8.5,1.5 8.5,2.5 8.5,3.5C 7.20895,3.26269 6.20895,3.59603 5.5,4.5C 5.5,12.5 5.5,20.5 5.5,28.5C 12.1667,28.5 18.8333,28.5 25.5,28.5C 25.4431,29.609 25.1098,30.609 24.5,31.5C 17.1667,31.5 9.83333,31.5 2.5,31.5C 1.36101,21.9107 1.19434,12.244 2,2.5C 3.75417,0.749986 5.92083,0.0833195 8.5,0.5 Z"/></g>
<g><path style="opacity:1" fill="#a9b7bb" d="M 8.5,0.5 C 8.5,0.166667 8.5,-0.166667 8.5,-0.5C 13.1667,-0.5 17.8333,-0.5 22.5,-0.5C 22.5,-0.166667 22.5,0.166667 22.5,0.5C 21.8333,0.5 21.5,0.833333 21.5,1.5C 17.5,2.83333 13.5,2.83333 9.5,1.5C 9.5,0.833333 9.16667,0.5 8.5,0.5 Z"/></g>
<g><path style="opacity:1" fill="#fd9e10" d="M 22.5,0.5 C 25.0792,0.0833195 27.2458,0.749986 29,2.5C 29.8057,12.244 29.639,21.9107 28.5,31.5C 27.1667,31.5 25.8333,31.5 24.5,31.5C 25.1098,30.609 25.4431,29.609 25.5,28.5C 25.5,20.5 25.5,12.5 25.5,4.5C 24.791,3.59603 23.791,3.26269 22.5,3.5C 22.5,2.5 22.5,1.5 22.5,0.5 Z"/></g>
<g><path style="opacity:1" fill="#e5ca99" d="M 8.5,0.5 C 9.16667,0.5 9.5,0.833333 9.5,1.5C 11.0478,2.79426 13.0478,3.46093 15.5,3.5C 17.9522,3.46093 19.9522,2.79426 21.5,1.5C 21.5,0.833333 21.8333,0.5 22.5,0.5C 22.5,1.5 22.5,2.5 22.5,3.5C 23.791,3.26269 24.791,3.59603 25.5,4.5C 18.8333,4.5 12.1667,4.5 5.5,4.5C 6.20895,3.59603 7.20895,3.26269 8.5,3.5C 8.5,2.5 8.5,1.5 8.5,0.5 Z"/></g>
<g><path style="opacity:1" fill="#f5b34a" d="M 9.5,1.5 C 13.5,2.83333 17.5,2.83333 21.5,1.5C 19.9522,2.79426 17.9522,3.46093 15.5,3.5C 13.0478,3.46093 11.0478,2.79426 9.5,1.5 Z"/></g>
<g><path style="opacity:1" fill="#dfe7e9" d="M 5.5,4.5 C 12.1667,4.5 18.8333,4.5 25.5,4.5C 25.5,12.5 25.5,20.5 25.5,28.5C 18.8333,28.5 12.1667,28.5 5.5,28.5C 5.5,20.5 5.5,12.5 5.5,4.5 Z"/></g>
</svg>
`;

const fingerprint = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" xml:space="preserve" version="1.1" viewBox="0 0 32 32">
<image width="32" height="32" xlink:href="data:image/png;base64,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"/>
</svg>`;

const iconComponents = {
  registry: <SvgXml xml={registryxml} />,
  report: <Printer />,
  calendar: <Calendar />,
  offer: <Books />,
  identity: <SvgXml xml={fingerprint} />,
  subject: <Subject />
};

interface Props {
  title: string;
  icon: string;
}

const CategoryButton: FC<Props> = ({ title, icon, ...props }) => {
  return (
    <Container {...props}>
      <ContentWrapper>
        {iconComponents[icon]}
        <Title>{title}</Title>
      </ContentWrapper>
      <Icon name="chevron-right" />
    </Container>
  );
};

export default CategoryButton;
