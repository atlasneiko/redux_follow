const { bindActionCreators } = require("redux");

import * as actions from "./actionTypes"

// export function bugAdded(descripttion) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     };
// }

export const bugAdded = description =>({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
});
export function bugRemoved(description) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: 1
        }
    }

}
export const bugResolved = id =>({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})