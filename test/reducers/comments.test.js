import { expect } from '../test_helper'

import CommentsReducer from '../../src/reducers/comments.reducer'
import { ADD_COMMENT } from '../../src/actions/types'

describe('CommentsReducer', () => {
    it('handles actions with unknown types', () => {
        const unknownAction = { type: 'not a real type' }
        expect(CommentsReducer(undefined, unknownAction)).to.be.instanceof(Array)
    })
    it('handles ADD_COMMENT actions', () => {
        const comment = 'New Comment'
        const action = { type: ADD_COMMENT, comment: comment }
        expect(CommentsReducer(undefined, action)).to.eql([comment])
    })
})