const state = {
    isLoading: 0,
    user: {
        id: '',
        email: '',
        is_admin: false,
        firstname: '',
        lastname: '',
        phone_number: '',
        image: '',
        image_id: '',
        username: '',
        token: localStorage.getItem('token'),
        isLoggedIn: new Date().getTime() < JSON.parse(localStorage.getItem('expAt')),
        authStatus: false,
        message: '',
        registered: undefined
    },
    // incidents: [],
    // incident: {
    //     id: '',
    //     createdBy: '',
    //     createdOn: '',
    //     creator: '',
    //     updatedOn: '',
    //     title: '',
    //     type: '',
    //     location: '',
    //     status: '',
    //     comment: '',
    //     images: '',
    //     videos: '',
    // },
};

export default state;
