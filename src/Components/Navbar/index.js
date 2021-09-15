import { useProfileUser } from '../../Context/index';
import { APIUsers } from '../../Services/Axios/baseService';
import { NavbarDropdown } from '../NavbarDropdown';
import { FiLogOut } from 'react-icons/fi';
import {
  Nav, NavContent, NavRight, Logo, Links,
  NavbarItems, A, Hr, Button,
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
        <Logo href="/">Learn<br />Japanese</Logo>
        <NavbarItems>
          <Links>
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
          </Links>
          <NavRight>
            <FiLogOut style={{ cursor: 'pointer' }} onClick={() => logout()} />
          </NavRight>
        </NavbarItems>
      </NavContent>
    </Nav>
  );
};

export default Navbar;