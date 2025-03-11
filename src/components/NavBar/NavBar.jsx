import { Link } from 'react-router';

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/mailbox'>Mailboxes</Link>
          </li>
          <li>
            <Link to='/mailbox/new'>New Mailbox</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  