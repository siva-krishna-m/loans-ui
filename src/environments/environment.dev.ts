export const environment = {
    BASE_URL: "http://localhost:3000",
    CUSTOMER_BASE_URL: "http://localhost:3000/customers/",
    USER_BASE_URL: "http://localhost:3000/customers/",
    production: false,
  CUSTOMER: {
    GET_ALL_CUSTOMERS: "list",
    GET_CUSTOMER_DETAILS: "view",
    UPDATE_CUSTOMER_DETAILS: "update",
    DELETE_CUSTOMER: "delete",
    ADD_CUSTOMER: "add"
  },
  LOAN: {
    GET_ALL_LOAN: "list",
    GET_LOAN: "view",
    UPDATE_LOAN: "update",
    DELETE_LOAN: "delete",
    ADD_LOAN: "add"
  },
  USER: {
    ADD_USER: "add",
    GET_USERS: "userList",
    UPDATE_USER: "update",
    DELETE_USER: "delete",
    GET_USER: "user"
  }
};
