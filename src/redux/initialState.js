const state = {
    isLoading: false,
    user: {
        isLoggedIn: false,
        authStatus: false,
        id: undefined,
        email: undefined,
        isAdmin: false,
        firstName: undefined,
        lasName: undefined,
        phoneNumber: undefined,
        username: undefined,
        token: undefined,
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
