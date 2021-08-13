import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import ManageModal from '../ManageModal';
import {
    Row, Kanji, ContentField, Buttons, Button, Readings, Reading, Values, P,
} from './Style';

const ListValues = ({ v, type, refreshFunction, deleteFunction }) => {
    const [show, setShow] = useState(false);
    const [action, setAction] = useState("");

    const removeElement = async () => {
        const response = await deleteFunction(v._id)
        .then((r) => r);
        if (response.status === 200) {
            refreshFunction();
        }
        setShow(false);
    }

    return (
        <>
            <Row>
                <Values>
                    {type === 'kanji' ? (
                        <>
                            <ContentField>
                                <Kanji>{v.kanji}</Kanji>
                                <P>{v.kanjiMeaning.join(', ')}</P>
                            </ContentField>
                            <Readings>
                                <Reading>
                                    <P style={{ fontWeight: 'bold' }}>Onyomi:</P>
                                    <P>{v?.onyomi.join(', ')}</P>
                                </Reading>
                                <Reading>
                                    <P style={{ fontWeight: 'bold' }}>Kunyomi:</P>
                                    <P>{v?.kunyomi.map((v) => v.reading).join(', ')}</P>
                                </Reading>
                            </Readings>
                        </>
                    ) : (
                        <>
                            <ContentField>
                                <Kanji>{v.shape}</Kanji>
                                <P>({v.strokeCount})</P>
                            </ContentField>
                            <Readings>
                                <P>{v.meaning}</P>
                            </Readings>
                        </>
                    )}
                </Values>
                <Buttons>
                    <Button onClick={() => { setShow(true); setAction("Edit") }}><MdEdit /></Button>
                    <Button onClick={() => { setShow(true); setAction("Delete") }}><BsFillTrashFill /></Button>
                </Buttons>
            </Row>
            <ManageModal 
                action={action}
                kanji={v.kanji}
                modalState={show}
                setModalState={setShow}
                deleteFunction={removeElement}
            />
        </>
    )
}

export default ListValues;

/* 
const objeto = [
    {
        leitura: "ola",
    },
    {
        leitura: "isto",
    },
    {
        leitura: "e um teste",
    },
]


*/
