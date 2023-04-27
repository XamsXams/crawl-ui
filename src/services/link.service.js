import httpRequest from '../utils/httpRequest';

/**
 *
 * @param {String} url
 * @param {Object} options
 * @returns
 */
export const getAllText = async (url, options = {}) => {
    try {
        const res = await httpRequest.post('/images', { url, ...options });
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
