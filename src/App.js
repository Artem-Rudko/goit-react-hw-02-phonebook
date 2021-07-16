import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addNewContact = data => {
        const normilizedData = data.name.toLowerCase();
        const dublicate = this.state.contacts.find(
            contact => contact.name.toLowerCase() === normilizedData,
        );

        const newContact = {
            ...data,
            id: uuidv4(),
        };

        dublicate
            ? alert(`${dublicate.name} is already in contacts`)
            : this.setState(({ contacts }) => ({
                  contacts: [newContact, ...contacts],
              }));
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    deleteContact = contactId => {
        console.log('delete was clicked');
        console.log(contactId);
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    render() {
        const normalizedFilter = this.state.filter.toLowerCase();
        const filteredContacts = this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );

        return (
            <div className="App">
                <h1 className="title">Phonebook</h1>
                <ContactForm onSubmit={this.addNewContact} />
                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onChange={this.changeFilter}
                />
                <ContactList
                    contacts={filteredContacts}
                    onDeleteContact={this.deleteContact}
                />
            </div>
        );
    }
}

App.propTypes = {
    contacts: PropTypes.array.isRequired,
};

export default App;
