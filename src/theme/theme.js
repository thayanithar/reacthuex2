import { createMuiTheme } from '@material-ui/core/styles';

export const  theme = createMuiTheme({
    palette:{
        primary:{
            main:'#4DB6AC',
            
        } ,
        secoundry:{
            main:'#cccccc'
        },
        boxpara:{
            textAalign: 'center',
            font: 'Regular 16px/24px Roboto',
             letterSpacing: '0',
                color: '#868E96',
                 opacity: '1',
        },
    }
})


export default theme;
