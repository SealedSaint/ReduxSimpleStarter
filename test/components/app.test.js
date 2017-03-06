import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app.component'

// Use 'describe' to group together similar tests
describe('App', () => {
    let component
    beforeEach(() => {
        component = renderComponent(App)
    })

    it('has the right top-level class', () => {
        const className = 'app'
        expect(component).to.have.class(className)
    })
    it('shows an AddComment component', () => {
        expect(component.find('.add-comment')).to.exist
    })
    it('shows a CommentList component', () => {
        expect(component.find('.comment-list')).to.exist
    })
})