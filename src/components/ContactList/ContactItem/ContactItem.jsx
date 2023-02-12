import PropTypes from 'prop-types';
import { ContactWrapper } from './ContactItem.styled';

export const Contact = ({ name, number, onDelete }) => {
    return (
        <ContactWrapper>
            {name}: {number}
            <button type="button" onClick={onDelete}>Delete</button>
        </ContactWrapper>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired,
}.isRequired;
