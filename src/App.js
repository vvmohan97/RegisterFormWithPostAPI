import {
  Box,
  Typography,
  Card,
  TextField,Button,
} from "@mui/material"
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const notify = () =>{
    toast("Register successfull",
    toast.POSITION.TOP_CENTER
 ) }

const [toast,setToast]=useState()
  const [fullName , setFullName] = useState();  
  const [designation,setDesignation]=useState();
  const [workexperience,setWorkexperience]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()
  const [usercompany,setUsercompany]=useState()
  const [data , setData] =useState({});
  const [sucess,setSucess]=useState();
  // const payload ={
  //   "full_name":fullName,
  //   "designation": designation,
  //   "work_experience": workexperience,
  //   "email": email,
  //   "mobile_no": phone,
  //   "user_company":usercompany
  // };

  // console.log(values)

  const validate=(values)=>{
    setData(values)
    const errors={};
    if(!values.full_name){
      errors.full_name="*Requried"
      // console.log("working")
    }
    // else if(values.name.length<5){
    //   errors.full_name="should be greater than 5letters"
    // }
    if(!values.designation){
      errors.designation="*Requried"
    }
    if(!values.email){
      errors.email="*Requried"
    }
    // else if((!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email))){
    //   errors.email="Enter a valid Email"
    // }
    if(!values.mobile_no){
      errors.mobile_no="*Requried"
    }
    
    if(!values.work_experience){
      errors.work_experience="*Requried"
    }
    if(!values.user_company){
      errors.user_company='*Requried'
    }
    return(errors)
  }

  const formik=useFormik({
    initialValues:{
      full_name:"",
      designation:"",
      email:"",
      mobile_no:"",
      work_experience:"",
      user_company:""
    },
    validate
  })

  const handleClick=()=>{

    axios.post("http://demo.emeetify.com:8080/daytodaytask/admin/register" ,data)
    .then((response)=>{setSucess(response.data)
    
    })
    .catch(e =>{console.log("e" ,e)})

    // if(sucess.status === true){
    //     console.log('working fine');
    // }else{
    //   console.log("go to home");
    // }
  }
// console.log(sucess ,"------>  ");
 


  return (
    <div>
      <Box display="flex"
        flexDirection={'column'}
        maxWidth={1000}
        alignItems="center"
        margin={'auto'}
        padding={1}
        // height="100vh"
        width={"60vw"}
        borderRadius={5}
        boxShadow={'0px 12px 15px 10px #ccc'}
            sx={{":hover":{
           boxShadow:'15px 15px 15px  #ccc'
        }}}
        
        >
      <Typography sx={{textAlign:"center", fontFamily:"Roboto",fontSize:"20px"}}>Register Page</Typography>
    <form onSubmit={formik.handleSubmit}>
      <TextField variant="outlined"
      sx={{marginLeft:"10px",marginTop:"40px"}}
      label="Enter Your  Name"
      value={formik.values.full_name}
      name="full_name"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
    ></TextField><br/> {
    formik.touched.full_name && formik.errors.full_name ? <div style={{color:"red"}}>{formik.errors.full_name}</div>:null
    }
       <TextField variant="outlined"
      sx={{marginLeft:"10px",marginTop:"40px"}}
      label="Designation"
      value={formik.values.designation}
      name="designation"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
    ></TextField><br/>
        {
    formik.touched.designation && formik.errors.designation ? <div style={{color:"red"}}>{formik.errors.designation}</div>:null
    }
    <TextField varient="outlined"
    label="email"
    name="email"
    type="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}

      sx={{marginLeft:"10px",marginTop:"40px"}}
    ></TextField><br/>
   {
    formik.touched.email && formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:null
    }
    
    <TextField label="Phone Number" type="number" name="mobile_no" value={formik.values.mobile_no} 
          onChange={formik.handleChange}

    sx={{marginLeft:"10px",marginTop:"40px"}}></TextField><br/>
    {
    formik.touched.mobile_no && formik.errors.mobile_no ? <div style={{color:"red"}}>{formik.errors.mobile_no}</div>:null
    }
  
    <TextField label="Work Experience" type="number" name="work_experience" 
          onChange={formik.handleChange}

    value={formik.values.work_experience}  sx={{marginLeft:"10px",marginTop:"40px"}}></TextField><br/>
       {
    formik.touched.work_experience  && formik.errors.work_experience ? <div style={{color:"red"}}>{formik.errors.work_experience}</div>:null
    }
  
          <TextField label="User Company " type="text"  name="user_company" 
                onChange={formik.handleChange}

          value={formik.values.user_company}  sx={{marginLeft:"10px",marginTop:"40px"}}></TextField><br/>
             {
    formik.touched.user_company && formik.errors.user_company ? <div style={{color:"red"}}>{formik.errors.user_company}</div>:null
    }
    <Button    
        //  htmlType="submit"
         type="primary"
         className="btn"
        sx={{
        backgroundColor: "blue",
      
      marginLeft:"90px",
      marginTop:"15px"
   }}
   onClick={handleClick}
        >Register</Button>
{
   sucess === true ? (<ToastContainer value='logged in'/>) :null
}
      </form>
      </Box>
      <Button onClick={(e)=>notify()}>Click</Button>
      <ToastContainer/>
        



    
     
    </div>
  );
}

export default App;
