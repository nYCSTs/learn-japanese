import { React } from 'react';
import QuestionBox from '../QuestionBox';
import {
    P, Input, InputField
} from '../../Constants/testStyles';

const RadicalForms = ({ operationType, radicalShape, setRadicalShape, radicalStrokeCount, setRadicalStrokeCount, radicalMeaning, setRadicalMeaning, operationFunction }) => {
    return (
        <QuestionBox 
            title={`${operationType} Radical`}
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
                                {[...Array(18).keys()].slice(1).map((stroke, idx) => {
                                    return (
                                        <option key={idx}>
                                            {stroke}
                                        </option>
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
            buttonText={operationType}
            buttonFunction={operationFunction}
            width="420px"
        />
    )
}

export default RadicalForms;