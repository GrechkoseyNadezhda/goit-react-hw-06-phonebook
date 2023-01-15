import { List, Btn, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.filter);
  const filteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContactsList.map(({ name, number, id }) => (
        <Item key={id}>
          <div>
            {name}:{number}
          </div>
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
