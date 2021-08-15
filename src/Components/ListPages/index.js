import ListValues from '../../Components/ListValues';
import {
    Main, Hr, H2, Button, Top,
} from './Style';

const ListPages = ({ title, type, valuesList, refreshFunction, deleteFunction }) => {
    return (
        <Main>
            <Top>
                <H2>{title}</H2>
                <a href={`/add-${type}`} style={{ color: 'black', textDecoration: 'none' }}><Button>Cadastrar {type}</Button></a>
            </Top>
            {valuesList.map((v, idx) => {
                return (
                    <div key={idx}>
                        <ListValues 
                            v={v}
                            keyValue={type === 'kanji' ? v.kanji : v.shape}
                            type={type}
                            refreshFunction={refreshFunction}
                            deleteFunction={deleteFunction}
                        />
                        <Hr />
                    </div>
                );
            })}
        </Main>
    )
}

export default ListPages;