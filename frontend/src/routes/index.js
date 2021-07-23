import SignUp from "../container/Signup";
import Upload from "../container/Upload";
import Login from './../container/Login,';
import AllData from './../container/AllData';

const routes=[
    {exact:true, path:'/', component:SignUp},
    {exact:true, path:'/login', component:Login},
    {exact:true, path:'/upload', component:Upload},
    {exact:true, path:'/showdata', component:AllData}
]
export default routes