import { renderComponent, expect } from '../test_helper'
import AddComment from '../../src/containers/add_comment.container'

describe('AddComment', () => {
    let component
    beforeEach(() => {
        component = renderComponent(AddComment)
    })

    it('has the right top-level class', () => {
        const className = 'add-comment'
        expect(component).to.have.class(className)
    })
    it('has a textarea', () => {
        expect(component.find('textarea')).to.exist
    })
    it('has a button', () => {
        expect(component.find('button')).to.exist
    })

    describe('textbox functionality', () => {
        let text = 'new comment'
        beforeEach(() => {
            component.find('textarea').simulate('change', text)
        })

        it('shows text in the textbox when entered', () => {
            expect(component.find('textarea')).to.have.value(text)
        })
        it('clears the textbox on submit', () => {
            component.simulate('submit')
            expect(component.find('textarea')).to.have.value('')
        })
    })
})