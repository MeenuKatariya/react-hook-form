import React from 'react';
import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material"
import SignupBox from '../component/SignupBox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { fontWeight, margin, Stack } from '@mui/system';
import  bg from "../assets/bg.png";
import { useForm, Controller } from "react-hook-form";
export const Signup = () => {

    const registerSchema = yup.object().shape({
        eliCodes: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
        confirmPassword: yup.string() .oneOf([yup.ref('password'), null], 'Passwords must match').required("required")
    });
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(registerSchema)
      });
    
      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };
    
      const Wrapper = styled(Box)({
        position: "relative",
        width: "100%",
        height: "740px",
        backgroundColor: "#808080",
        background: "rgba(255, 255, 255, 0.87)",
        backdropfilter: "blur(24px)",
        margin:"auto"
        
     
    })
    
    const Stack = styled(Typography)({
        display: "flex",
        justifyContent: "space-around",
        width: "87px",
        margin:"auto",
        color:"#FF8D8D",
        marginTop:"100px",
        
    })

    const LogoBox = styled(Box)({

    })
    const Signup = styled(Typography)({
        margin:"auto",
        Font: "Roboto",
        FontWeight:"700",
        FontSize:"24px",
        LineHeight:"28.13px",
        Align: "center",
        color:"#666666",
        marginTop:"20px"
        })

    const Gridbox = styled(Grid)({
         width: "270px",
         margin: "auto",
         height: "340px",
         marginTop:"10px"
    })

    const Fielddesign = styled(TextField)({
        boxShadow: "0px 14px 31px -23px rgba(0, 0, 0, 0.25)",
        borderRadius: "16px",
        backgroundColor:"#F5F5F5"
     })

     const Signtypography = styled(Typography)({
        fontFamily:"Roboto",
        fontWeight:"300",
        fontSize:"12px",
        LineHeight:"17.58px",
        alignItems:"center",
        color:"#808080"
    })

    const SignButton = styled(Button)({
        width: "270px",
        height: "50px",
        marginTop: "10px",
        fontWeight: "500",
        fontSize: "21px",
        color:"#FFFFFF;",
        backgroundColor: "#70EDB9",
        boxShadow: "0px 14px 31px -23px rgba(0, 0, 0, 0.25)",
        borderRadius: "11px",
    })

    const AccountBox = styled(Typography)({
        display:"flex",
        margin:"auto",
        marginTop:"12px",
        width:"220px",
        justifyContent:"space-around",
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "18px",
    })

    const BackgroundImage = styled(Box)({
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "linear-gradient(180deg, #13D8E5 0%, #ADF4F9 100%)"
    }) 

    const Join = styled(Typography)({
        position:"absolute",
        zIndex:"0",
        top:"25%",
        left:"50%",
        textAlign:"center",
        fontSize:"87px",
        fontWeight:"900",
        color:"#343434"
    })

    const Team = styled(Typography)({
        fontSize:"87px",
        fontWeight:"900",
        marginLeft:"-130px",
        color:"#343434"
    })

    

    
  return (
    <Wrapper >
    <BackgroundImage >
      <Box component="img"  width="100%" height="100%"  src={bg}></Box>
      </BackgroundImage>
      <Join > Join The <br /><Team >Team</Team> </Join>
     <SignupBox  >
        <LogoBox>
        <img src=""></img>
       <Stack >
       <Typography fontSize="20px" fontWeight="700">Eli</Typography>
        <Typography color="#5DC399" marginTop="5px"> Codes</Typography>
       </Stack>
       <Signup>Sign up</Signup>
        </LogoBox>

         
        
            <form  >
               <Gridbox container spacing={2} >
                <Grid width="100%" height="59px"  >
                    <Fielddesign fullWidth 
                    label="Eli Codes"

                    name="eliCodes"
                    {...register('eliCodes')}
                    error={errors.eliCodes ? true : false}
                    sx={{
                        "& fieldset": { border: 'none' },
                        "& error" :{ backgroundColor:"none" }
                      }}
                    >
                   </Fielddesign>
                 <Typography variant="inherit" color="textSecondary" style={{color:"red",width:"200px",textAlign:"left",marginLeft:"10px",marginbottom:"4px"}}>
                {errors.eliCodes?.message}
              </Typography>
                </Grid>
                <Grid width="100%" height="59px"  >
                <Fielddesign
                 fullWidth
                label="Email"
                
                name="email"
                {...register('email')}
                error={errors.email ? true : false}
              

                sx={{
                    "& fieldset": { border: 'none' },
                  }}
                >
                  
                </Fielddesign>
                <Typography variant="inherit" color="textSecondary" style={{color:"red",width:"200px",textAlign:"left",marginLeft:"10px",marginbottom:"4px"}}>
                {errors.email?.message}
              </Typography>
                </Grid>
                <Grid width="100%" height="59px"  >
                <Fielddesign
                fullWidth
                label="Password"
                type="password"
                 name="password"
                {...register('password')}
                error={errors.password ? true : false}
                sx={{
                    "& fieldset": { border: 'none' },
                  }}
                >
                </Fielddesign>

                <Typography variant="inherit" color="textSecondary" style={{color:"red",width:"200px",textAlign:"left",marginLeft:"10px",marginbottom:"4px"}}>
                {errors.password?.message}
              </Typography>
                </Grid>
                <Grid width="100%" height="59px" >
                <Fielddesign
                fullWidth
                type="password"
                label="Confirm Password"
                
                name="confirmPassword"
               
                {...register('confirmPassword')}
                error={errors.confirmPassword ? true : false}
              

                sx={{
                    "& fieldset": { border: 'none' },
                  }}
                ></Fielddesign>
                <Typography variant="inherit" color="textSecondary" style={{color:"red",width:"200px",textAlign:"left",marginLeft:"10px",marginbottom:"4px"}}>
                {errors.confirmPassword?.message}
              </Typography>
                </Grid>
                
               </Gridbox>
               
                <SignButton  type="submit" onClick={handleSubmit(onSubmit)}>Sign up</SignButton>
                <Box width="230px"  marginTop="15px" height="40px" marginLeft="80px" >
                <Signtypography >By signing up, I agree to the Privacy Policy and Terms of Service</Signtypography>
                </Box>
                <AccountBox>
                    <Typography color="#808080" fontSize="14px">Already have an account?</Typography>
                    <Typography color="#FF8D8D" fontSize="14px">SignIn</Typography>
                </AccountBox>
                
                
            </form>
       
      </SignupBox>

     
    </Wrapper>
  )
}
