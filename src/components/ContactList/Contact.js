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

export default Contact;
