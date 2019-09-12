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

        return { generic: errors }
    } catch (error) {
        return { generic: errors };
    }
};

function isObject(obj) {
    return obj instanceof Object
}
