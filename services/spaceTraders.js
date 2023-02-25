
const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=980c66ae-9c79-4711-a1b8-10c12291c51b`,
    newUser: `https://api.spacetraders.io/users/:username/claim`
};

const getUserProfile = async () => {
    try {
        const response = await fetch(endpoints.userProfile);
        const data = await response.json();
        
        return data;

    } catch (err) {
        console.error(err);
        return {};
    }
}

export default {
    getUserProfile
}