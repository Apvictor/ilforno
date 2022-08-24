export class Categories {
    id?: number
    fontFamily?: string = 'Satisfy';
    backgroundImage?: string = 'c96c3e';
    backgroundColor?: string = '000';
    title?: Title;
    subtitle?: Subtitle;
}

export class Title {
    name?: string = '';
    fontSize?: string = '30px';
    textAlign?: string = 'center';
    textDecoration?: string = 'none';
    color?: string = '000';
}

export class Subtitle {
    name?: string = '';
    fontSize?: string = '20px';
    textAlign?: string = 'center';
    textDecoration?: string = 'none';
    color?: string = '000';
}