/**
 * Created by chonglu.wang on 2017/3/7.
 */
import * as types from './mutation-types'

export const sameAction1 = ({ commit }, param1) => {
  commit(types.SOME_MUTATION_ONE, param1)
}

export const sameAction2 = ({ commit }, param1) => {
  commit(types.SOME_MUTATION_ONE, param1)
}