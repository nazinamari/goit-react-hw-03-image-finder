import PropTypes from 'prop-types';
import { Contact } from './ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Contact
                        id={id}
                        name={name}
                        number={number}
                        onDelete={() => onDeleteContact(id)}
                    />
                </ListItem>
            ))}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onClickDelete: PropTypes.func.isRequired,
}.isRequired;