import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
// import './App.css';

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
        const newContact = {
            ...data,
            id: uuidv4(),
        };
        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    render() {
        return (
            <div className="App">
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addNewContact} />
                <h2>Contacts</h2>
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}

export default App;
