import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';

const initialState = [
  {_id: 1, boxOwner: 'Michael', boxSize: 'Medium',}
]

const App = () => {
  const [mailbox, setMailbox] = useState(initialState);

  const addBox = (newBoxData) => {
    newBoxData._id = mailbox.length + 1;
    setMailbox([...mailbox, newBoxData]);
  };

  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element={<h1>Post Office</h1>} />
      <Route path='/mailbox' element={<MailboxList mailbox={mailbox} />} />
      <Route path='/mailbox/new' element={<MailboxForm addBox={addBox} />} />
      <Route path='/mailboxes/:mailboxId' 
      element={<MailboxDetails mailbox={mailbox}/>} />
    <Route path="*" element={ <h2>Mailbox Not Found! </h2> }></Route>
    </Routes>
    </>
  )
};

export default App;
