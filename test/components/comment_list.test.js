import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/containers/comment_list.container'

describe('CommentList', () => {
    let component
    let state = { comments: ['New Comment 1', 'New Comment 2'] }
    beforeEach(() => {
        component = renderComponent(CommentList, null, state)
    })

    it('has the right top-level class', () => {
        const className = 'comment-list'
        expect(component).to.have.class(className)
    })
    it('shows an li for each comment', () => {
        expect(component.find('li').length).to.equal(state.comments.length)
    })
    it('shows each comment that is provided', () => {
        for(let comment of state.comments) {
            expect(component).to.contain(comment)
        }
    })
})