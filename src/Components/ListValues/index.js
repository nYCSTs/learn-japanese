import { useState, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router';
import ManageModal from '../ManageModal';
import {
    Row, Kanji, ContentField, Buttons, Button, Readings, Reading, Values, P,
} from './Style';
import { getRadicalsByIDs } from '../../Services/Axios/kanjiServices';

const ListValues = ({ keyValue, v, type, refreshFunction, deleteFunction }) => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [radicalsList, setRadicalsList] = useState([]);

    const removeElement = async () => {
        const response = await deleteFunction(v._id)
        .then((r) => r);
        if (response.status === 200) {
            refreshFunction();
        }
        setShow(false);
    };

    useEffect(async () => {
        await getRadicalsByIDs(v.radicals)
        .then((r) => setRadicalsList(r.data));
    }, []);

    return (
        <>
            <Row>
                <Values>
                    {type === 'kanji' ? (
                        <>
                            <ContentField>
                                <Kanji>{keyValue}</Kanji>
                                <P>{v.kanjiMeaning.join(', ')}</P>
                            </ContentField>
                            <Readings>
                                <Reading>
                                    <P style={{ fontWeight: 'bold', fontSize: '18px' }}>Onyomi:</P>
                                    <P>{v?.onyomi.length ? v?.onyomi.join(', ') : "---"}</P>
                                </Reading>
                                <Reading>
                                    <P style={{ fontWeight: 'bold', fontSize: '18px' }}>Kunyomi:</P>
                                    <P>{v?.kunyomi.length ? v?.kunyomi.map((v) => v.reading).join(', ') : "---"}</P>
                                </Reading>
                                <Reading>
                                    <P style={{ fontWeight: 'bold', fontSize: '18px' }}>Radicais:</P>
                                    <P>{radicalsList.map((r) => r.shape).join(', ')}</P>
                                </Reading>
                            </Readings>
                            
                        </>
                    ) : (
                        <>
                            <ContentField>
                                <Kanji>{keyValue}</Kanji>
                                <P>({v.strokeCount})</P>
                            </ContentField>
                            <Readings>
                                <P style={{ fontWeight: 'bold', fontSize: '18px'  }}>Significado:</P>
                                <P>{v.meaning}</P>
                            </Readings>
                        </>
                    )}
                </Values>
                <Buttons>
                    <Button onClick={() => {type === 'kanji' ? history.push(`/edit-kanji/${v._id}`) : history.push(`/edit-radical/${v._id}`)}}><MdEdit/></Button>
                    <Button onClick={() => { setShow(true); }}><BsFillTrashFill /></Button>
                </Buttons>
            </Row>
            <ManageModal 
                type={type}
                removedValue={keyValue}
                modalState={show}
                setModalState={setShow}
                deleteFunction={removeElement}
            />
        </>
    );
}

export default ListValues;