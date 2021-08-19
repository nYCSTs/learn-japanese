import { useEffect, useState } from 'react'; 
import { useHistory, useParams } from "react-router";
import { getRadicalByID, updateRadical } from '../../Services/Axios/kanjiServices';
import RadicalForm from '../../Components/RadicalForm';

const EditRadicalPage = () => {
    const history = useHistory();
    const { id } = useParams();
    const [radicalShape, setRadicalShape] = useState();
    const [radicalStrokeCount, setRadicalStrokeCount] = useState();
    const [radicalMeaning, setRadicalMeaning] = useState();

    const submitUpdate = async () => {
        if (!radicalShape || !radicalMeaning) {
            alert("Existem campos vazios.")
        } else {
            const response = await updateRadical(id, radicalShape, radicalMeaning, radicalStrokeCount)
            .then((response) => response);

            if (response.status === 200) {
                alert("Atualizacao feita com sucesso.")
                history.push('/manage-radicals');
            } else {
                alert("Ocorreu um erro.");
                console.error(response);            
            }
        }
    }

    useEffect(async () => {
        await getRadicalByID(id)
        .then((response) => {
            setRadicalShape(response.data.shape);
            setRadicalStrokeCount(response.data.strokeCount);
            setRadicalMeaning(response.data.meaning);
        });
    }, []);

    return (
        <RadicalForm 
            operationType="Editar"
            operationFunction={submitUpdate}
            radicalShape={radicalShape}
            radicalStrokeCount={radicalStrokeCount}
            radicalMeaning={radicalMeaning}
            setRadicalShape={setRadicalShape}
            setRadicalMeaning={setRadicalMeaning}
            setRadicalStrokeCount={setRadicalStrokeCount}  
        />
    );
};

export default EditRadicalPage;