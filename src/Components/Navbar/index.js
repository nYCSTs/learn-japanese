import { useProfileUser } from '../../Context/index';
import { APIUsers } from '../../Services/Axios/baseService';
import { NavbarDropdown } from '../NavbarDropdown';
import { FiLogOut } from 'react-icons/fi';
import {
  Nav, NavContent, NavLeft, NavRight, Logo, 
  NavbarItems, A, Hr, NavbarItem, Button,
} from './Style';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const { setToken, user } = useProfileUser();

  const logout = () => {
    try {
      history.push('/login');
      localStorage.clear();
      APIUsers.defaults.headers = null;
      setToken(localStorage.getItem('@App:token'));
    } catch (err) {
      alert("Nao foi possivel fazer o logout")
    }
  }

  return (
    <Nav>
      <NavContent>
        <NavLeft>
          <Logo href="/">Learn<br />Japanese</Logo>
          <NavbarItems>
            {user.role === 'admin' ? (
              <NavbarDropdown text="Gerenciar">
                <A href="/add-kanji">Cadastrar Kanji</A>
                <A href="/manage-kanjis">Gerenciar Kanjis</A>
                <Hr />
                <A href="/add-radical">Cadastrar Radical</A>
                <A href="/manage-radicals">Gerenciar Radicais</A>
                <Hr />
                <A href="/manage-radicals">Gerenciar Usuarios</A>
              </NavbarDropdown>
            ) : null}
            <Button onClick={() => history.push("/grammar")}>Gramatica</Button>
          </NavbarItems>
        </NavLeft>
        <NavRight>
          <FiLogOut style={{ cursor: 'pointer' }} onClick={() => logout()} />
        </NavRight>
      </NavContent>
    </Nav>
  );
};

export default Navbar;

/*
 <>
      <HeaderTop>
        <Content>
          <Username href="/">{user.username}</Username>
        </Content>
      </HeaderTop>
      <Navbar expand="lg" variant="dark" style={{ padding: '6px', backgroundColor: '#1d439b' }} >
        <Navbar.Brand style={{ margin: '0' }} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Pagina Inicial</Nav.Link>
            {user.role === 'admin' ? (
              <NavDropdown title="Gerenciar" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/add-kanji">Cadastrar Kanjis</NavDropdown.Item>
                <NavDropdown.Item href="/manage-kanjis">Gerenciar Kanjis</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/add-radical">Cadastrar Radicais</NavDropdown.Item>
                <NavDropdown.Item href="/manage-radicals">Gerenciar Radicais</NavDropdown.Item>
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
*/