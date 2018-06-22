import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pokemon from './Pokemon';

Enzyme.configure({ adapter: new Adapter() });

// import Search from './Search';

describe('Pokemon', () => {
  let props;
  let mountedPokemon;
  const pokemon = () => {
    if (!mountedPokemon) {
      mountedPokemon = mount(<Pokemon {...props} />);
    }
    return mountedPokemon;
  };

  beforeEach(() => {
    props = {
      pokemon: '',
    };
    mountedPokemon = undefined;
  });

  test('pokemon should render', () => {
    const lis = pokemon().find('li');
    expect(lis.length).toBe(1);
  });
});
