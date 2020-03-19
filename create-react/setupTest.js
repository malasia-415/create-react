import Ensyme from 'enzyme'
import Adapter from 'enzyme-adapter-recat-16'

Enzyme.configure({ adapter: new Adapter() })