import React from "react";
import './mainPage.module.css'
// import '.../media.saas'
import {Button} from "@mui/material";
import { InputBase } from '@mui/material';
import TextField from "@mui/material/TextField";


export const MAinScreen=()=>{
    return(
        <div>

           <div>
               <div>Логин</div>
               <TextField
                   // style={{justifyContent: "space-between"}}
                   size={'small'}
                   variant={'outlined'}
                   label={'логин'}
               />
           </div>
            <div>
                <div>Пароль</div>
                <TextField
                    size={'small'}
                    variant={'outlined'}
                    // onChange={onChangeSetLocalItem}
                    // onKeyDown={onEnterDownAddItem}
                    label={'пароль'}
                    // error={error}
                    // helperText={error&&'Title is required'}
                />
            </div>
            <span>
    <Button variant={"contained"}>LogIn</Button>
</span>
            <div>
               <img src={'https://peterburg.center/sites/default/files/12_otel_spb_0.jpg'}/>
            </div>
<input type={'datetime'}/>


        </div>
    )
}


