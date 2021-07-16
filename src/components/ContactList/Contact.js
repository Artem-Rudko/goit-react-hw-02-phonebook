import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
