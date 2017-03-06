import { expect } from '../test_helper'

import { ADD_COMMENT } from '../../src/actions/types'
import { addComment } from '../../src/actions/index'

describe('actions', () => {
    describe('add comment', () => {
        let action
        let comment = 'New Comment'
        beforeEach(() => {
            action = addComment(comment)
        })

        it('has the correct type', () => {
            expect(action.type).to.equal(ADD_COMMENT)
        })
        it('has the right comment', () => {
            expect(action.comment).to.equal(comment)
        })
    })
})