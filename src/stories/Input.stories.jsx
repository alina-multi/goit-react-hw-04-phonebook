import React from 'react';
import {Input} from "../components/Input";
// import { within, userEvent } from '@storybook/testing-library';

const onChange = (e) => {
    console.log(e.target.value)
    return e.target.value
}

export default {    
    title: 'Example/Input',
    component: Input,
    argTypes: {
        value: {control: 'value'}
    }
}

const Template = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
    value: 'Enter your name',
    onChange: { action: 'changed'},
}