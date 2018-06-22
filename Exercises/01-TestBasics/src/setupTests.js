import { configure } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
