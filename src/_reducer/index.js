/**
 * Created by michael.eze on 12/17/2018.
 */

import {SUCCESS} from '../_constants';
import {initialState} from '../_store';


export function login (state = initialState.login, action){

    switch (action.type) {
        case SUCCESS:
            return Object.assign({},state,{
                message:action.message
            });
            // return [{...state}, {message:action.message}]
        default:
            return state
    }

}

export function records (state = null) {
    return state
}