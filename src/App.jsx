import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';

const initialState = [
  { _id: 1, boxSize: 'Large', boxOwner: 'Desmond', },
]

const App = () => {
  const [mailbox, setMailbox] = useState(initialState);

  const addBox = (newBoxData) => {
    newBoxData._id = mailbox.length =1;
    setMailbox([]);
  };

  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element={<h1>Post Office</h1>} />
      <Route path='/mailbox' element={<MailboxList mailbox={mailbox} />} />
      <Route path='/new-mailbox' element={<MailboxForm />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
    <Route path="*" element={ <h2>Mailbox Not Found! </h2> }></Route>
    </Routes>
    </>
  )
};

export default App;
