
const dashboardService = require('../services/dashboardService')
const userService = require('../services/userService');
const roleService = require('../services/roleService');
const courseService = require("../services/courseService");
const categoryService = require('../services/categoryService')

const getDashboardPage = async (req, res) => {
    const token = req.cookies.authUser

    const tokenEmail = await dashboardService.GetDahsboardPageUser(token);
    if (tokenEmail.success) {
        const userMail = tokenEmail.data.email

        const user = await userService.getUserByEmail(userMail)
        
        if (!user.success) {
            return res.status(user.code).redirect('/login')
        }

        const category = await categoryService.getAllCategory();
        
        
        const courses = await courseService.getCouerseByUser(user.data._id)

        
        return res.status(user.code).render('dashboard', {
            pageName: 'dashboard',
            user: user.data,
            courses:courses.data,
            categories:category.data

        })

    }

    //! make response Without Pass

    res.status(tokenEmail.code).redirect('/')



}

const getDashboardUsersPage = async (req, res) => {

    const user = await userService.getAllUser();

    if (!user.success) {
        return res.status(user.code).redirect('/dashboard');

    }

    return res.status(user.code).render("dashboard_Users", {
        pageName: "dashboarduser",
        user: user.data

    })
}

const getDashboardUserPage = async (req, res) => {

    const { id } = req.params;

    const result = await userService.getUserById(id);
    let roles = await roleService.getAllRoles();

    if (!roles.success) {
        roles.data = [];
    }
    if (!result.success) {
        return res.status(result.code).redirect('/dashboard/users');

    }


    return res.status(result.code).render("dashboard_User", {
        pageName: "dashboarduser",
        user: result.data,
        roles: roles.data

    })
}
const deleteUserById = async (req, res) => {
    const { id } = req.params;

    const result = await userService.deleteUserById(id);

    res.status(result.code).redirect('/dashboard/users')

}

const updateUserById = async (req, res) => {

    const { name, email, userRole } = req.body;
    const { id } = req.params

    const data = {
        name,
        email,
        userRole,
        id
    }

    const result = await userService.updateUser(data);

    if (!result.success) {
        return res.status(result.code).redirect('/dashboard/users')
    }

    return res.status(result.code).redirect(`/dashboard/user/${id}`)
}

module.exports = {
    getDashboardPage,
    getDashboardUsersPage,
    getDashboardUserPage,
    deleteUserById,
    updateUserById

}