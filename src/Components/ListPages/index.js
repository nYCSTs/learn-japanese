import { useState } from 'react';
import ListValues from '../../Components/ListValues';
import {
    Main, Hr, H2,
} from './Style';

const ListPages = ({ title, type, valuesList, refreshFunction, deleteFunction }) => {
    const [show, setShow] = useState(false);

    return (
        <Main>
            <H2>{title}</H2>
            {valuesList.map((v) => {
                return (
                    <>
                        <ListValues 
                            v={v}
                            type={type}
                            setShowModal={setShow}
                            refreshFunction={refreshFunction}
                            deleteFunction={deleteFunction}
                        />
                        <Hr />
                    </>
                );
            })}
        </Main>
    )
}

export default ListPages;