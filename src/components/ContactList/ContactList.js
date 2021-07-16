import Contact from './Contact';
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

export default ContactList;
