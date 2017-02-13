import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(nums) {
    return _.round(_.sum(nums)/nums.length)
}

export default ({ data, units, color = 'red' }) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    )
}