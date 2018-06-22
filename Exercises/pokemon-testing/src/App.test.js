import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import page from './reducers/page';
import Search from './components/Search';
import Pokemon from './components/Pokemon';


Enzyme.configure({ adapter: new Adapter() });

describe('render testing', () => {
  test('Always renders a Search', () => {
    expect(Search().find(Search).length).toBe(1);
  });
  test('render pokemon', () => {
    const lis = Pokemon().find('li');
    expect(lis.length).toBe(1);
  });
  test('always render button', () => {
    const button = Pokemon().find('button');
    expect(button.length).toBe(1);
  });
});

describe('redux testing', () => {
  test('Request Pokemons Testing', () => {
    const initialState = {
      isFetched: false,
      pokemons: [],
      displayedPokemons: [],
    };
    const expected = {
      ...initialState,
      isFetched: true,
    };
    expect(expected).toBe(page(undefined));
  });
});

describe('redux testing part 2', () => {
  test('Recieve Pokemon Testing', () => {
    const initialState = {
      isFetched: false,
      pokemons: [],
      displayedPokemons: [],
    };
    const expected = {
      ...initialState,
      pokemons: [],
      isFetched: false,
    };
    expect(expected).toBe(page(undefined));
  });
});

describe('redux testing part 3', () => {
  test('Filter Pokemon Testing', () => {
    const initialState = {
      isFetched: false,
      pokemons: [],
      displayedPokemons: [],
    };
    const expected = {
      ...initialState,
      displayedPokemons: [],
    };
    expect(expected).toBe(page(undefined));
  });
});
