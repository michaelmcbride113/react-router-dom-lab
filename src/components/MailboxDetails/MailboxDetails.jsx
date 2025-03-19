import { useParams } from "react-router";

const MailboxDetails = (props) => {
    console.log(props); 
    
    const { mailboxId } = useParams();
    const singleMailbox = props.mailbox.find((box) => box._id === Number(mailboxId));

    if (!singleMailbox) {
      return <h2>Mailbox is not found!</h2>;
    }

    return (
      <>
        <h2>{singleMailbox._id}</h2>
        <dl>
          <dt>Box Size: </dt>
          <dd>{singleMailbox.boxSize}</dd>
          <dt>Box Owner: </dt>
          <dd>{singleMailbox.boxOwner}</dd>
        </dl>
      </>
    );
  };
  
  export default MailboxDetails;
  