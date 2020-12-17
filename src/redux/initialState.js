const state = {
    isLoading: false,
    user: {
        id: undefined,
        email: undefined,
        is_admin: false,
        firstname: undefined,
        lasname: undefined,
        phone_number: undefined,
        image: undefined,
        image_id: undefined,
        username: undefined,
        token: undefined,
        isLoggedIn: false,
        authStatus: false,
    },
    incidents: [],
    incident: {
        id: '',
        createdBy: '',
        createdOn: '',
        creator: '',
        updatedOn: '',
        title: '',
        type: '',
        location: '',
        status: '',
        comment: '',
        images: '',
        videos: '',
    },
};

export default state;
