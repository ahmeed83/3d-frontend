import React from 'react';
import WelcomeBanner from './WelcomeBanner';

const people = [
  'Siri',
  'Alexa',
  'Google',
  'Facebook',
  'Twitter',
  'Linkedin',
  'Sinkedin',
];

const Test = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? people
    : people.filter(person =>
        person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div>
      <WelcomeBanner />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
