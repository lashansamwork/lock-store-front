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
import { textAlign } from '@mui/system';

function Comparison() {
    const [itemOne, setItemOne] = React.useState<string>('');
    const [itemTwo, setItemTwo] = React.useState<string>('');

    const handleChangeItemOne = (event: SelectChangeEvent) => {
        setItemOne(event.target.value as string);
    };
    const handleChangeItemTwo = (event: SelectChangeEvent) => {
        setItemTwo(event.target.value as string);
    };


    return (
        <Box>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: '60px', fontWeight: 'bold', mt: '70px', mb: '15px' }}>
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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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

                    <Box sx={{ fontSize: '17px', borderTop: 1, borderColor: 'grey.400', textAlign: 'center', }}>
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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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

                        <Box sx={{ fontSize: '17px', borderTop: 1, borderColor: 'grey.400', textAlign: 'center', }}>
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

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: '30px', p: '20px', borderBottom: 1, borderColor: 'grey.400' }}> Quick Look </Box>

            <Box display={'flex'}>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1, textAlign: 'center' }}>
                    <Box sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                        6.7″
                    </Box>
                    <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Super Retina XDR display with ProMotion1
                    </Box>
                </Box>
                <Box sx={{ width: '50%', height: '100%', p: 1, mx: 1, textAlign: 'center' }}>
                    <Box sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                        6.1″
                    </Box>
                    <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Super Retina XDR display1
                    </Box>
                </Box>
            </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: '30px', p: '20px', borderBottom: 1, borderColor: 'grey.400' }}> Capacity </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: '30px', p: '20px', borderBottom: 1, borderColor: 'grey.400' }}> Display </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: '30px', p: '20px', borderBottom: 1, borderColor: 'grey.400' }}> Size and Weight </Box>

        </Box>
    );
}

export default Comparison;
