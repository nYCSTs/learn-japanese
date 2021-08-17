import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import ManageModal from '../ManageModal';
import {
    Row, Kanji, ContentField, Buttons, Button, Readings, Reading, Values, P,
} from './Style';

const ListValues = ({ keyValue, v, type, refreshFunction, deleteFunction }) => {
    const [show, setShow] = useState(false);

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
                                <Kanji>{keyValue}</Kanji>
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
                                <Kanji>{keyValue}</Kanji>
                                <P>({v.strokeCount})</P>
                            </ContentField>
                            <Readings>
                                <P>{v.meaning}</P>
                            </Readings>
                        </>
                    )}
                </Values>
                <Buttons>
                    <Button><MdEdit/></Button>
                    <Button onClick={() => { setShow(true); }}><BsFillTrashFill /></Button>
                </Buttons>
            </Row>
            <ManageModal 
                confirmationText={`${type} ${keyValue}`}
                modalState={show}
                setModalState={setShow}
                deleteFunction={removeElement}
            />
        </>
    )
}

export default ListValues;