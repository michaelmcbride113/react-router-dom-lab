import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailboxes</h2>
        <ul>
            {props.mailbox.map((currentMailbox) => (
                <li key={currentMailbox._id}>
                    <Link to={`/mailbox${currentMailbox._id}`}>
                    {currentMailbox.boxOwner}
                    </Link>
                </li>
            ))}
        </ul>
    </>
    );
};

export default MailboxList;
