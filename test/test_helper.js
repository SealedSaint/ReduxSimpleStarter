import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import jsdom from 'jsdom'
import _$ from 'jquery'  // jquery that doesn't have the right window
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'

// Set up testing environment to run like a browser in the cmd line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
const $ = _$(global.window)  // Our own jquery that has the correct window

// Build "renderComponent" helper to render a given react class
function renderComponent(ComponentClass, props, state) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	)
	return $(ReactDOM.findDOMNode(componentInstance))  // Produces HTML and wraps with jquery
}

// Build helper to simulate events
$.fn.simulate = function(eventName, value) {  // $.fn assigns a function that can be referenced by $('element').ourFunction
	if(value) this.val(value)  // If we need to pass a value, set it on the object
	TestUtils.Simulate[eventName](this[0], value)  // "this" is the jquery referenced object; $('div') -> the div
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $)

export { renderComponent, expect }
