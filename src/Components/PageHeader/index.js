import { 
    P, HeaderTop, Content, Username,
} from './Style';
import { useProfileUser } from '../../Context/index';
import { APIUsers } from '../../Services/Axios/baseService';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const PageHeader = () => {
    const { setToken, user, testCount } = useProfileUser();

    const logout = () => {
        try {
            localStorage.clear();
            APIUsers.defaults.headers = null;
            setToken(localStorage.getItem('@App:token'));
        } catch (err) {
            alert("Nao foi possivel fazer o logout")
        }
    }

    return (
        <>
            <HeaderTop>
                <Content>
                    <Username href="/">{user.username}</Username>
                    <P>Testes feitos na semana: {testCount}</P>
                </Content>
            </HeaderTop>
            <Navbar expand="lg" variant="dark" style={{ padding: '6px', backgroundColor: '#1d439b' }} >
                <Navbar.Brand style={{ margin: '0' }} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Pagina Inicial</Nav.Link>
                        { user.role === 'admin' ? (
                            <NavDropdown title="Gerenciar" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/add-kanji">Cadastrar Kanjis</NavDropdown.Item>
                                <NavDropdown.Item href="/edit-kanji">Editar Kanjis</NavDropdown.Item>
                                <NavDropdown.Item href="/remove-kanji">Remover Kanjis</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/add-radical">Cadastrar Radicais</NavDropdown.Item>
                                <NavDropdown.Item href="/add-radical">Editar Radicais</NavDropdown.Item>
                                <NavDropdown.Item href="/add-radical">Remover Radicais</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/manage-users">Usuarios</NavDropdown.Item>
                            </NavDropdown>
                        ) : null}
                    </Nav>
                    <Nav className="ml-auto">
                        <NavDropdown.Divider />
                        <Nav.Link href="/login" onClick={() => logout()}>Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default PageHeader;