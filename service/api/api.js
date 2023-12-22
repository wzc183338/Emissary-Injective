import { request } from "./apiHandler"

export const base_url = "http://localhost:8000/api";

export const API = {

    // User API's

    login: (body) => request.post(base_url + "/user/sign-in", body),


    // Emissary API's

    createEmissary: (body) => request.post(base_url + "/emissary/create-emissary", body),
    getUserEmissaries: () => request.get(base_url + "/emissary/get-user-emissaries"),
    getUserEmissaryWithUniqueCode: (body) => request.post(base_url + "/emissary/get-emissary-with-unique-code", body),
    getUserEmissaryById: (body) => request.post(base_url + "/emissary/get-emissary", body),
    updateUserEmissary: (body) => request.post(base_url + "/emissary/update-user-emissary", body),


    // Emissary Roles API's

    getEmissaryController: (body) => request.post(base_url + "/emissary-role/get-all-emissary-roles", body),
    deleteEmissaryController: (body) => request.post(base_url + "/emissary-role/delete-emissary-role", body),




    // Safe API's

    createSafe: (body) => request.post(base_url + "/safe/create-safe", body),
    getUserSafe: (body) => request.post(base_url + "/safe/get-user-safes", body),
    getUserSafeById: (body) => request.post(base_url + "/safe/get-safe-by-id", body),
    getSafeByEmissaryId: (body) => request.post(base_url + "/safe/get-safe-by-emissary-id", body),


    // Safe Roles API's

    getRolesBySafeId: (body) => request.post(base_url + "/safe/get-safe-approvers", body),
    userApproveSafe: (body) => request.post(base_url + "/safe/user-approve-safe", body),


    // Program API's

    createProgram: (body) => request.post(base_url + "/program/create-program", body),
    getEmissaryPrograms: (body) => request.post(base_url + "/program/get-programs-by-emissary", body)
};
