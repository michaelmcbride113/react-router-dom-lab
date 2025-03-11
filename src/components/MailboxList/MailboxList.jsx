// src/components/PokemonList/PokemonList.jsx

import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailboxes</h2>
        <ul>
            {props.mailbox.map((currentMailbox) => {
                <li key={currentMailbox.name}>
                    <Link to={`/mailbox${currentMailbox._id}`}>
                    {currentMailbox.name}
                    </Link>
                </li>
            })}
        </ul>
    </>
    );
};

export default MailboxList
