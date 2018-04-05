import { shallow } from '@vue/test-utils';
import BasicInput from '@/components/BasicInput.vue';

describe('BasicInput.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallow(BasicInput, {
      propsData: {
        onChange(val) {
          return `${val}!`;
        }
      }
    });
    expect(wrapper.vm.onChange(msg)).toMatch(`${msg}!`);
  });
});
