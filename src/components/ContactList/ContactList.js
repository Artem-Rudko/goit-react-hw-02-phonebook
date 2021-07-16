import Contact from './Contact';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                    id={id}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
