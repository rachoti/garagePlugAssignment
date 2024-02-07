export interface IntroPageData {
    slides: Slide[]
    login:string,
    path: string
 }

 interface Slide {
    header: string;
    imgSrc: string;
    desc: string;
 }