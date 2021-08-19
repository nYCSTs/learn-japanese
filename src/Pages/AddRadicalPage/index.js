import { React, useState } from 'react';
import { addNewRadical } from '../../Services/Axios/kanjiServices';
import RadicalForm from '../../Components/RadicalForm';

const AddRadicalPage = () => {
    const [radicalShape, setRadicalShape] = useState('');
    const [radicalMeaning, setRadicalMeaning] = useState('');
    const [radicalStrokeCount, setRadicalStrokeCount] = useState(1);

    const registerRadical = async () => {
        if (!radicalShape || !radicalMeaning) {
            alert("Existem campos vazios.")
        } else if (await addNewRadical(radicalShape, radicalMeaning, radicalStrokeCount)) {
            setRadicalShape('');
            setRadicalMeaning('');
            setRadicalStrokeCount(1);
            alert("Cadastro realizado com sucesso.");
        }
    };

    return (
        <RadicalForm 
            operationType="Cadastrar"
            operationFunction={registerRadical}
            radicalShape={radicalShape}
            radicalStrokeCount={radicalStrokeCount}
            radicalMeaning={radicalMeaning}
            setRadicalShape={setRadicalShape}
            setRadicalMeaning={setRadicalMeaning}
            setRadicalStrokeCount={setRadicalStrokeCount}   
        />
    )
}

export default AddRadicalPage;