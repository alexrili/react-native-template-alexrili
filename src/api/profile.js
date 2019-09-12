import request from 'utils/request'

export function getUserInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({});
        }, 2000)
    })
}
