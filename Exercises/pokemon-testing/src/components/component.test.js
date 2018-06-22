import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pokemon from './Pokemon';
import Search from './Search';

Enzyme.configure({ adapter: new Adapter() });

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

  describe('pokemon contains', () => {
    test('button to be rendered', () => {
      const button = pokemon().find('button');
      expect(button.length).toBe(1);
    });

    test('paragraph to be rendered', () => {
      const p = pokemon().find('p');
      expect(p.length).toBe(1);
    });
  });
});

describe('Search', () => {
  let props;
  let mountedSearch;
  const search = () => {
    if (!mountedSearch) {
      mountedSearch = mount(<Search {...props} />);
    }
    return mountedSearch;
  };

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
    };
    mountedSearch = undefined;
  });

  test('search should render', () => {
    const input = search().find('input');
    expect(input.length).toBe(1);
  });
});
