import { useParams } from "react-router";

const MailboxDetails = (props) => {
    console.log(props); 
    
    const { mailboxId } = useParams();
    const singleMailbox = props.mailbox.find((box) => {
        box._id === Number(mailboxId)
    });

    return (
      <>
        <h2>{singleMailbox._id}</h2>
        <dl>
          <dt>Box Size: {singleMailbox.boxSize}</dt>
          <dd></dd>
          <dt>Box Owner: {singleMailbox.boxOwner} </dt>
          <dd></dd>
        </dl>
      </>
    );
  };
  
  export default MailboxDetails;
  