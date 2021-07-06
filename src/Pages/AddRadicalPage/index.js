import { React, useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import {
    RadicalsBox, Title, InputDiv, P,
} from './Style';
import { addNewRadical } from '../../Services/Axios/kanjiServices';

const AddRadicalPage = () => {
    const [radicalShape, setRadicalShape] = useState('');
    const [radicalMeaning, setRadicalMeaning] = useState('');

    const registerRadical = async () => {
        if (await addNewRadical(radicalShape, radicalMeaning)) {
            setRadicalShape('');
            setRadicalMeaning('');
        }
    };

    return (
        <>
            <PageHeader />
            <RadicalsBox>
                <Title>
                    Registrar Radical
                </Title>
                <InputDiv>
                    <P>Forma: </P>
                    <input style={{ width: '100%' }} value={radicalShape} onChange={(e) => setRadicalShape(e.target.value)}/>
                </InputDiv>
                <InputDiv>
                    <P>Significado: </P>
                    <input style={{ width: '100%' }} value={radicalMeaning} onChange={(e) => setRadicalMeaning(e.target.value)}/>
                </InputDiv>
                <button onClick={() => registerRadical()}>Registrar</button>
            </RadicalsBox>
        </>
    )
}

export default AddRadicalPage;