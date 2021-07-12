import {
    Main, Title, InputList, Button,
} from './Style';

const QuestionBox = ({title, children, buttonFunction, buttonText, width = '680px' }) => {
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
            <Button onClick={() => buttonFunction()}>{buttonText}</Button>
        </Main>
    );
};

export default QuestionBox;