import login from '../../../public/project`s Image/login.png'
import admin from '../../../public/project`s Image/admin.png'
import user from '../../../public/project`s Image/user.png'
import dashbord from '../../../public/project`s Image/dashbord.png'
import panel from '../../../public/project`s Image/panel.png'

export const ProjectData = [
     {
        id : 1,
        Image : panel,
        title : "پنل ادمین",
        link: "https://admin-panel-gamma-orcin.vercel.app/",
        category : 'Dashbord'
    },
    {
        id : 2,
        Image : login,
        title : "فرم ثبت نام",
        link: "project/login",
        category : 'Component'
    },
    {
        id : 3,
        Image : admin,
        title : "داشبورد ادمین",
        link: "project/admin",
        category : 'Dashbord'

    },
    {
        id : 4,
        Image : user,
        title : "داشبورد کاربر",
        link: "project/user",
        category : 'Dashbord'
    },
    {
        id : 5,
        Image : dashbord,
        title : "داشبورد شیشه ای",
        link: "project/dashbord",
        category : 'Dashbord'
    },

]