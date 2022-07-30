import React from 'react';
import Lens from '@material-ui/icons/Lens';
import {
    Button,
    CardActionArea,
    CardMedia,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Radio,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import { brown, pink } from '@mui/material/colors';
import Looks5OutlinedIcon from '@material-ui/icons/Looks5Outlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

function Comparison() {
    const [itemOne, setItemOne] = React.useState<string>('');
    const [itemTwo, setItemTwo] = React.useState<string>('');
    const options = [
        {
            label: "Lock 1",
            value: "1",
        },
        {
            label: "Lock 1",
            value: "1",
        },
        {
            label: "Lock 3",
            value: "1",
        },
        {
            label: "Lock 4",
            value: "1",
        },
    ];

    const handleChangeItemOne = (event: SelectChangeEvent) => {
        setItemOne(event.target.value as string);
    };
    const handleChangeItemTwo = (event: SelectChangeEvent) => {
        setItemTwo(event.target.value as string);
    };


    return (
        <Box sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: '60px', fontWeight: 'bold', mb: '15px' }}>
                    Compare Door Lock Models
                </Box>
                <Box sx={{ fontSize: '20px' }}>
                    <Link href="#" underline="hover" mr='30px'>See all models {'>'}</Link>
                    <Link href="#" underline="hover">Shop iPhone {'>'}</Link>
                </Box>
                <Box sx={{ fontSize: '20px', m: '20px' }}>
                    Get help choosing.
                    <Link href="#" underline="hover">Chat with a Specialist {'>'}</Link>
                </Box>
            </Box>

            <Box sx={{ mt: 6 }} display={'flex'}>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Item One</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={itemOne}
                            label="itemOne"
                            onChange={handleChangeItemOne}>
                            {options.map((option) => (
                                <MenuItem value={option.value}>{option.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Box sx={{ mt: 2 }}>
                        <React.Fragment>
                            <CardActionArea>
                                <CardMedia
                                    className='comparison-media'
                                    title="lock image one"
                                    image={require("../assets/img/door-lock-1.jpg")}
                                />
                            </CardActionArea>
                        </React.Fragment>
                    </Box>
                    <Radio
                        color="default"
                        checkedIcon={<Lens></Lens>}
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                            root: {
                                color: 'green',
                            },
                            colorSecondary: {
                                '&$checked': {
                                    color: 'green',
                                },
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: 50,
                            },
                        }}
                    />
                    <Radio
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 50,
                            },
                            root: {
                                color: 'pink',
                            },
                        }}
                    />

                    <Box sx={{ fontSize: '17px', borderTop: 1, borderColor: 'grey.300', textAlign: 'center', }}>
                        <Box sx={{ fontSize: '17px', marginTop: '20px', fontWeight: 'bold' }}>
                            Starting at A$1,849
                        </Box>
                        <Button sx={{ fontSize: '17px', borderRadius: '25px', textTransform: 'capitalize', margin: '20px' }} variant="contained">Buy</Button>
                        <Box >
                            <Link href="#" underline="hover">Learn More {'>'}</Link>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Item Two</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={itemTwo}
                            label="itemOne"
                            onChange={handleChangeItemTwo}>
                            {options.map((option) => (
                                <MenuItem value={option.value}>{option.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ mt: 2 }}>
                        <React.Fragment>
                            <CardActionArea>
                                <CardMedia
                                    className='comparison-media'
                                    title="lock image two"
                                    image={require("../assets/img/door-lock-2.jpg")}
                                />
                            </CardActionArea>
                        </React.Fragment>

                        <Radio
                            checkedIcon={<Lens></Lens>}

                            // {...controlProps('e')}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                root: {
                                    color: 'green',
                                },
                                colorSecondary: {
                                    '&$checked': {
                                        color: 'green',
                                    },
                                },
                                '& .MuiSvgIcon-root': {
                                    // color: pink[600],
                                    // fill: pink[600],
                                    fontSize: 50,
                                },
                                '& .MuiSvgIcon-colorSecondary': {
                                    // color: pink[600],
                                    // fill: green[600],
                                    fontSize: 50,
                                },
                            }}
                        />
                        <Radio
                            // {...controlProps('e')}
                            sx={{
                                color: brown[800],
                                '&.Mui-checked': {
                                    color: brown[600],
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: 50,
                                },
                            }}
                        />

                        <Box sx={{ fontSize: '17px', borderTop: 1, borderColor: 'grey.300', textAlign: 'center', }}>
                            <Box sx={{ fontSize: '17px', mt: '20px', fontWeight: 'bold' }}>
                                Starting at A$1,849
                            </Box>
                            <Button sx={{ fontSize: '17px', borderRadius: '25px', textTransform: 'capitalize', m: '20px' }} variant="contained">Buy</Button>
                            <Box >
                                <Link href="#" underline="hover">Learn More {'>'}</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Quick Look </Box>

            <Box display={'flex'}>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1, textAlign: 'center' }}>
                    <Box sx={{ m: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h2">
                            6.7″
                        </Typography>
                        <Box sx={{ fontWeight: 'bold' }}>
                            Super Retina XDR display with ProMotion <span style={{ verticalAlign: 'super' }}>1</span>
                        </Box>
                    </Box>
                    <Box sx={{ m: 8 }}>
                        <Looks5OutlinedIcon style={{ fontSize: 100 }} />
                        <Box sx={{ fontWeight: 'bold' }}>Superfast 5G <span style={{ verticalAlign: 'super' }}>2</span>
                        </Box>
                    </Box>
                    <Box sx={{ m: 8 }}>
                        <CameraAltOutlinedIcon style={{ fontSize: 100 }} />
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Telephoto</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Wide</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Telephoto</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Cinematic mode in 1080p at 30 fps</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Dolby Vision HDR video recording up to 4K at 60 fps</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1, textAlign: 'center' }}>
                    <Box sx={{ m: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h2">
                            6.1″
                        </Typography>
                        <Box sx={{ fontWeight: 'bold' }}>
                            Super Retina XDR display with ProMotion <span style={{ verticalAlign: 'super' }}>1</span>
                        </Box>
                    </Box>
                    <Box sx={{ m: 8 }}>
                        <Looks5OutlinedIcon style={{ fontSize: 100 }} />
                        <Box sx={{ fontWeight: 'bold' }}>Superfast 5G <span style={{ verticalAlign: 'super' }}>2</span>
                        </Box>
                    </Box>
                    <Box sx={{ m: 8 }}>
                        <CameraAltOutlinedIcon style={{ fontSize: 100 }} />
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Telephoto</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Wide</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Telephoto</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Cinematic mode in 1080p at 30 fps</Typography>
                        <Typography sx={{ fontWeight: 'bold', my: 1 }}>Dolby Vision HDR video recording up to 4K at 60 fps</Typography>
                    </Box>
                </Box>
            </Box >

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Size and Weight <span style={{ verticalAlign: 'super' }}>6</span> </Box>
            <Box display={'flex'}>
                <Box sx={{ width: '50%', height: '100%', p: 1, ml: 3, textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1"> Height </Typography>
                    <Typography> 160.8 mm (6.33 inches) </Typography>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Width </Typography>
                    <Typography> 78.1 mm (3.07 inches) </Typography>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Depth </Typography>
                    <Typography> 7.65 mm (0.30 inch) </Typography>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Weight </Typography>
                    <Typography> 238 grams (8.39 ounces) </Typography>
                </Box>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1, textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1"> Height </Typography>
                    <Typography> 160.8 mm (6.33 inches) </Typography>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Width </Typography>
                    <Typography> 78.1 mm (3.07 inches) </Typography>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Depth </Typography>
                    <Typography> 7.65 mm (0.30 inch) </Typography>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Weight </Typography>
                    <Typography> 238 grams (8.39 ounces) </Typography>
                </Box>
            </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Splash, Water and Dust Resistance <span style={{ verticalAlign: 'super' }}>4</span> </Box>
            <Box display={'flex'}>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 3, textAlign: 'left' }}>
                    <Typography> Rated IP68 (maximum depth of 6 metres for up to 30 minutes) under IEC standard 60529 (6.33 inches) </Typography>
                </Box>
                <Box sx={{ width: '50%', height: '100%', py: 1, textAlign: 'left' }}>
                    <Typography> Rated IP68 (maximum depth of 6 metres for up to 30 minutes) under IEC standard 60529 </Typography>
                </Box>
            </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Chip </Box>
            <Box display={'flex'}>
                <Box sx={{ width: '50%', height: '100%', p: 1, ml: 3, textAlign: 'left' }}>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> Height </Typography>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> New 6-core CPU with two performance cores and four efficiency cores </Typography>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> New 5-core GPU </Typography>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> New 16-core Neural Engine </Typography>
                </Box>
                <Box sx={{ width: '50%', height: '100%', p: 1, ml: 3, textAlign: 'left' }}>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> Height </Typography>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> New 6-core CPU with two performance cores and four efficiency cores </Typography>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> New 5-core GPU </Typography>
                    <Typography sx={{ mt: 3 }} variant="subtitle1"> New 16-core Neural Engine </Typography>
                </Box>
            </Box>
        </Box >
    );
}

export default Comparison;
