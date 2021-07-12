import { React } from 'react';
import {
    Main, Title, InputList, Button,
} from './Style';
import img from '../../Assets/Images/img1.jpg';

const QuestionBox = ({titleText, children, answerCheck, buttonText}) => {
    return (
        <Main onKeyPress={
            (event) => {
                if (event.key === 'Enter') {
                    answerCheck();
                }
            }
        }>
            <Title>{titleText}</Title>
            <InputList>
                {children}
            </InputList>
            <Button onClick={() => answerCheck()}>{buttonText}</Button>
        </Main>
    );
};

export default QuestionBox;