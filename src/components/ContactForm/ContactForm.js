import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: '',
    };

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
            id: '',
        });
    };

    render() {
        return (
            <form className={styles.inputForm} onSubmit={this.handleSubmit}>
                <label className={styles.label}>
                    <span>Name</span>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="i.e. James Bond"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleInputChange}
                    />
                </label>
                <label className={styles.label}>
                    Number
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        placeholder="i.e. 007-00-00"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>
                <button className={styles.submitBtn} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.defaultProps = {
    value: '',
};

ContactForm.propTypes = {
    value: PropTypes.string,
};

export default ContactForm;
