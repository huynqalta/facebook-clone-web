import Login from "@view/templates/Login";

export const publicRouter: Array<object> = [
    {
        path: "/login",
        exact: true,
        permissionCode: "ALLOW",
        main: () => <Login />,
    },
];
