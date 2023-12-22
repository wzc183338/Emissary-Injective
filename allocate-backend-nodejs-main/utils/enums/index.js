const currencies = {};

const paymentMethods = {
    OnlineBanking: "OnlineBanking",
    CryptoCurrency: "CryptoCurrency",
};

const roles = {
    ADMIN: "Admin",
    REGULAR: "Regular",
    AllAccess: "AllAccess",
    Approval: "Approval",
    Payout: "Payout",
    Safe: "Safes"
};


const tranferType = {
    simple: "Transfer",
    batchTranfer: "Batch Tranfer"
};


const access = {
    Private: "Private",
    Public: "Public",
    NFTHolder: "NFTHolder"
}

const status = {
    PENDING: "Pending",
    COMPLETED: "Completed",
    REJECTED: "Rejected",
}


module.exports = {
    currencies,
    paymentMethods,
    roles,
    status,
    access,
    tranferType
};
