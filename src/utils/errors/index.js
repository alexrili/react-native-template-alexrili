import errorDictionary from './dictionary';

// handle api errors
export const errorHandler = err => {
    try {
        const errors = err.response.data.error;

        if (isObject(errors)) {
            let objOfErrors = {};
            Object.keys(errors).forEach((objectKey) => {
                objOfErrors[objectKey] = errors[objectKey].toString();
            });
            return objOfErrors;
        }

        return errorDictionary[errors] || { generic: errors }
    } catch (error) {
        return errorDictionary[errors] || { generic: errors };
    }
};

function isObject(obj) {
    return obj instanceof Object
}
