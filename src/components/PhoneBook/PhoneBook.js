import React, { Component } from 'react';

import { Div, Title, ContactsTitle } from './PhoneBookStyles.js';

import { ContactForm } from 'components/ContactForm/ContactForm.js';

import { ContactList } from 'components/ContactList/ContactList.js';

import { Filter } from 'components/Filter/Filter.js';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  items = this.state.contacts;

  changedItems;

  handleChangeList = index => {
    this.setState({
      contacts: this.items.splice(index, 1),
    });
  };

  handleChange = id => {
    this.setState({
      filter: document.getElementById(id).value,
    });
  };

  handleSubmit = (evt, id, tl) => {
    evt.preventDefault();
    let skip = 0;
    this.items.forEach(item => {
      if (item.name === document.getElementById(id).value) {
        alert(`${document.getElementById(id).value} is already in contacts`);
        skip = 1;
      }
    });
    if (skip === 0) {
      const element = {
        id: 'id-' + (this.items.length + 1),
        name: document.getElementById(id).value,
        number: document.getElementById(tl).value,
      };

      this.setState({
        contacts: this.items.splice(this.items.length, 0, element),
        number: document.getElementById(tl).value,
      });
    }

    evt.target.reset();
  };

  render() {
    this.changedItems = [...this.items];

    if (this.state.filter !== '') {
      this.changedItems = this.items.filter(item =>
        item.name.includes(this.state.filter)
      );
    }

    return (
      <Div>
        <Title>Phonebook</Title>
        <ContactForm stateSubmit={this.handleSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter changeState={this.handleChange} />
        <ContactList
          persons={this.changedItems}
          changeList={this.handleChangeList}
        />
      </Div>
    );
  }
}

export { PhoneBook };
