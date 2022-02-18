
import * as React from 'react'
import * as ReactDom from 'react-dom'
import InputForm from './InputForm'



test("renders the inputForm without error", ()=> {
    const root = document.createElement("div");
    ReactDom.render(<InputForm/>, root)
    })

it('Check if it renders the textarea', function() {
    const root = document.createElement("div")
    ReactDom.render(<InputForm/>, root)

    expect(root.getElementsByTagName('textarea')[0].getAttribute('name')).toBe('input');
    });

it('Check if it renders the button', function() {
    const root = document.createElement("div")
    ReactDom.render(<InputForm/>, root)
    
    expect(root.getElementsByTagName('button')[0].getAttribute('type')).toBe('submit');
    });
