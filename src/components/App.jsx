import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyle';
import { Box } from './utils/Box';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component  {

  state = {
    contacts: [
      { id: nanoid(), name: 'Marina', number: '0851555005' },
      { id: nanoid(), name: 'Kirill', number: '0851000005' },
      { id: nanoid(), name: 'Yevhenii', number: '0994461365' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();
    
    contacts.find(({ name }) => name.toLowerCase().includes(normalizedName))
      ? alert(`${data.name} is already in contacts!`)
      : this.setState(prevState => ({
        contacts: [
          ...prevState.contacts, data],
      }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = cId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== cId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Box m="0 auto">
        {/* ------Add Contacts------- */}
        <h1>My PhoneBook</h1>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          gridGap={5}>
            <Section>
            <Form onSubmit={this.addContact} />
            </Section>
        {/* ------My Contacts------- */}
            <Section>
              {this.state.contacts.length ? (
                <Box
                  display="flex"
                  flexDirection="column"
                >
                  {/* ------Filter------- */}
                <Filter
                    onChange={this.onChangeFilter}  
                    value={filter}
                  />
                {/* ------Contact List------- */}
                <Section title="Contacts">
                  <ContactList
                    contacts={visibleContacts}
                    onDeleteContact={this.deleteContact}
                  />
                </Section>
                </Box>
              ) : (<p>There are no contacts.</p>
              )}
            </Section>
        </Box>
        <GlobalStyle />
      </Box>
    )
  }
}
