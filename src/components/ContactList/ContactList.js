import { List, Li, Span, Wrap, Delete } from './ContactListStyles.js';

import PropTypes from 'prop-types';

const ContactList = ({ persons, changeList }) => (
  <List>
    {persons.map((person, index) => (
      <Li key={person.id}>
        <Wrap>
          <Span>
            <Span>{person.name}</Span>
            <Span>:{person.number}</Span>
            <Span>
              <Delete
                id={index}
                onClick={e =>
                  changeList(Number.parseInt(document.getElementById(index).id))
                }
              >
                Delete
              </Delete>
            </Span>
          </Span>
        </Wrap>
      </Li>
    ))}
  </List>
);

export { ContactList };

ContactList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  changeList: PropTypes.func.isRequired,
};
