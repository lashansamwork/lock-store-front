import React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

function Verification({ onSubmitPressed }: {onSubmitPressed: Function }) {

    const [answers, setAnswers] = React.useState<any>({});


    return (
        <Box pt={4}>
            <Box sx={{ backgroundColor: '#f6f5f8'}} borderRadius={5} p={3}>
                <Box pb={2}>
                    <Box pb={1}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'Medium', color: grey[600] }}>
                            Which model do you have? 
                        </Typography>
                    </Box>
                    <Box display={'flex'}>
                        <Box flex={1} pr={5}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Choose your model?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    value={answers.model}
                                    label={'Choose your model?'}
                                    onChange={(event)=>{setAnswers({...answers, model: event.target.value})}}
                                >
                                        <MenuItem value={1}>iphone 5 - upto A$800</MenuItem>
                                        <MenuItem value={2}>iphone 6</MenuItem>
                                        <MenuItem value={3}>iphone X</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box flex={1} pl={5}>
                            <Typography variant="caption" sx={{ color: grey[600] }}>
                                On your iPhone, go to Settings {'>'} Your Name. Scroll down to see the model.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box pb={2}>
                    <Box pb={1}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'Medium', color: grey[600] }}>
                            How big is the capacity? 
                        </Typography>
                    </Box>
                    <Box display={'flex'}>
                        <Box flex={1} pr={5}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label-2">Choose your capacity?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-2"
                                    value={answers.capacity}
                                    label={'Choose your capacity?'}
                                    onChange={(event)=>{setAnswers({...answers, capacity: event.target.value})}}
                                >
                                        <MenuItem value={10}>32 GB</MenuItem>
                                        <MenuItem value={20}>64 GB</MenuItem>
                                        <MenuItem value={30}>120 GB</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box flex={1} pl={5}>
                            <Typography variant="caption" sx={{ color: grey[600] }}>
                                On your iPhone go to Settings {'>'} General {'>'} About.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box pb={2}>
                    <Box pb={1}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'Medium', color: grey[600] }}>
                            Is the iPhone in good condition? 
                        </Typography>
                    </Box>
                    <Box display={'flex'}>
                        <Box flex={1} pr={5}>
                        <ToggleButtonGroup  sx={{ width: '100%', display: 'flex' }} size="large" value={answers.isNewPhone} onChange={(event, newValue)=>{setAnswers({...answers, isNewPhone: newValue })}} exclusive={true}>
                            <ToggleButton value="yes" key="yes" sx={{ flex: 1 }}>
                                Yes
                            </ToggleButton>,
                            <ToggleButton value="no" key="no" sx={{ flex: 1 }}>
                                No
                            </ToggleButton>
                        </ToggleButtonGroup>
                        </Box>
                        <Box flex={1} pl={5} >
                            <Typography variant="caption" sx={{ color: grey[600] }}>
                                Answer yes if all of the following apply.
                                <ul>
                                    <li>It tunrs on and funtions normally</li>
                                    <li>All the buttons work</li>
                                    <li>The cameras work and all lenses are free of damage</li>
                                    <li>The body is free of dents and scratches</li>
                                    <li>The touchscreen and back glass are undamaged</li>
                                    <li>The display is free from distortion, lines, and black or white spots.</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box pb={2}>
                    <Box display={'flex'}>
                        <Box pb={1}  flex={1}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'Medium', color: grey[600] }} display="block">
                                Your iPhone may be worth upto ***$75. Go ahead and enter your serial number to confirm.
                            </Typography>
                        </Box>
                        <Box flex={1}>

                        </Box>
                    </Box>
                    <Box display={'flex'}>
                        <Box flex={1} pr={5}>
                            <TextField id="outlined-basic" label="Serial Number" variant="outlined" fullWidth />
                        </Box>
                        <Box flex={1} pl={5} >
                            <Typography variant="caption" sx={{ color: grey[600] }}>
                                On your iPhone, go to Settings {'>'} General {'>'} About.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box pb={2}>
                    <Box display={'flex'}>
                        <Box flex={1} pr={5}>
                            <Button variant="contained" sx={{ width: '100%', paddingY: 2 }} onClick={()=>onSubmitPressed()}>Verify</Button>
                        </Box>
                        <Box flex={1} pl={5}></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Verification;
