import { addCodeExample } from '../.storybook/helpers/code-example';
import './button.css';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
};
const Template = ({ label, className }) => {
  return `<button class="${className}">${label}</button>`;
};
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button-primary',
};
addCodeExample(Primary, Template);

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  className: 'button-secondary',
};
addCodeExample(Secondary, Template);
