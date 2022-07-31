import {
    Box,
    Radio,
    Typography
} from "@mui/material";
import { brown, pink } from '@mui/material/colors';

interface RadioBtnProps {
    controlProps: any
    color: string,
    colorName: string
}


function RadioButton({ controlProps, color, colorName }: RadioBtnProps) {
    return (<Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Radio
                {...controlProps}
                sx={{
                    color,
                    '&.Mui-checked': { //checked
                        color,
                        border: 3,
                        width: 40,
                        height: 40,
                        borderColor: '#0071e3'
                    },
                    '& .MuiSvgIcon-root': { //unchecked
                        fontSize: 40,
                        background: color,
                        borderRadius: 35/2,
                        border: 3,
                        width: 29,
                        height: 29
                    },
                }}
            />
            <Typography variant="caption" display="block" gutterBottom sx={{ opacity: controlProps.checked? 1 : 0, fontSize: 10 }}>
                {colorName}
            </Typography>
        </Box>
    );
}

export default RadioButton;
