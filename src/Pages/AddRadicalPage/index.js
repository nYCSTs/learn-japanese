import { React, useState } from 'react';
import QuestionBox from '../../Components/QuestionBox';
import {
    P, Input, InputField
} from '../../Constants/testStyles';
import { addNewRadical } from '../../Services/Axios/kanjiServices';

const AddRadicalPage = () => {
    const [radicalShape, setRadicalShape] = useState('');
    const [radicalMeaning, setRadicalMeaning] = useState('');
    const [radicalStrokeCount, setRadicalStrokeCount] = useState(1);

    const registerRadical = async () => {
        if (await addNewRadical(radicalShape, radicalMeaning, radicalStrokeCount)) {
            setRadicalShape('');
            setRadicalMeaning('');
            setRadicalStrokeCount(1);
        }
    };

    return (
        <QuestionBox 
            title="Registrar Radical"
            children={
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>                    
                        <InputField>
                            <P>Forma: </P>
                            <Input value={radicalShape} onChange={(e) => setRadicalShape(e.target.value)}/>
                        </InputField>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '12px' }}>
                            <P>Traços: </P>
                            <select value={radicalStrokeCount} style={{ height: 'min-content' }} onChange={(e) => setRadicalStrokeCount(e.target.value)}>
                                {[...Array(18).keys()].slice(1).map((stroke) => {
                                    return (
                                        <option>{stroke}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <InputField>
                        <P>Significado: </P>
                        <Input value={radicalMeaning} onChange={(e) => setRadicalMeaning(e.target.value)}/>
                    </InputField>
                </>
            }
            buttonText="Cadastrar"
            buttonFunction={registerRadical}
            width="420px"
        />
    )
}

export default AddRadicalPage;