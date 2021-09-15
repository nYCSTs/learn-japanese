import {
    Main, Title, InputList, Button, KanjiLink, Bottom
} from './Style';

const QuestionBox = ({title, kanji, children, buttonFunction, buttonText, width = '680px' }) => {
    return (
        <Main width={width} onKeyPress={
            (event) => {
                if (event.key === 'Enter') {
                    buttonFunction();
                }
            }
        }>
            <Title>{title}</Title>
            <InputList>
                {children}
            </InputList>
            <Bottom>
                <Button onClick={() => buttonFunction()}>{buttonText}</Button>
                { kanji ? <KanjiLink target="_blank" href={`https://hochanh.github.io/rtk/${kanji}/index.html`}>Mais sobre</KanjiLink> : null }
            </Bottom>
        </Main>
    );
};

export default QuestionBox;