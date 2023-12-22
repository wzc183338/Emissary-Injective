const userErrorMessages = {
    Login: 'Invalid Password',
    Register: 'User Signed Up Successfully',
    EmailExists: 'Email already exists',
    PhoneNumberExists: 'Phone number already exists',
    UserNameExists: 'User name already exists',
    InvalidUserData: 'Invalid User data',
    InvalidAccessToken: 'Invalid access token provided',
    IncorrectUserData: 'Incorrect User Email/password',
    IncorrectUserCode: 'Incorrect User Code',
    NotFound: 'User not found',
    IncorrectPassword: 'Incorrect password',
    NotFoundAssign: 'Assign User ID not found',
    UnAuthorized: 'You are not allowed to access this route!',
    SomethingWrong: 'Something went wrong!',
    EmailAlreadyExists: 'User already exists with this email',
    TokeAndPasswordNotProvided: "Token/Password not Provided",
    TokenExpired: "Token Has Expired, Contact Support!",
    FailedToVerify: "Failed To Verify User, Invalid Token",
    UserDetailNotFound: "User Details Not Found",
    TokenNotProvided: "Token not provided"
};



const authMiddleWareErrorMessages = {
    InValidToken: 'Invalid token',
    TokenNotFound: 'Token not found',
    RoleNotFound: 'This Role not found',
    UnAuthorizedAdmin: 'Role not authorized to perform this action',
};


const emissaryRoleErrorMessage = {
    Exists: "User Emissary Role Already Exists",
    NotFound: "Emissary Not Found"
}


const programErrorMessage = {
    NotFound: "Program Not Found",
};

const safeErrorMessage = {
    NotFound: "Safe Not Found",
};


const transferRequestErrorMessage = {
    NotFound: "Tranfer Request Not Found",
};

const emissaryRoleErorMessage = {
    NotFound: "Emissary Role Not Found",
}

module.exports = {
    userErrorMessages,
    authMiddleWareErrorMessages,
    emissaryRoleErrorMessage,
    programErrorMessage,
    safeErrorMessage,
    transferRequestErrorMessage,
    emissaryRoleErorMessage
};
