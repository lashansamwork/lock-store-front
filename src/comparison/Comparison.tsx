import React, { useEffect } from 'react';
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
import { blue, brown, green, red, yellow } from '@mui/material/colors';
import Looks5OutlinedIcon from '@material-ui/icons/Looks5Outlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import RadioButton from '../components/RadioButton';

const DOOR_LOCK_TYPES = [
    {
        id: 1,
        name: 'Door Lock Model 1',
        colors: [brown[800], red[800], blue[500]],
        colorsNames: ['Brown', 'Red', 'Blue'],
        selectedColor: brown[800],
        price: 'A$1,699',
        quickLook: {
            displaySize: '6.1"',
            networkType: 'Superfast 5G',
            cameraInfo: `Telephoto\nWide\nCinematic mode in 1080p at 30 fps\nDolby Vision HDR video recording up to 4K at 60 fps_type1`
        },
        sizeAndWeight: {
            height: '160.8 mm (6.33 inches)_type1',
            width: '78.1 mm (3.07 inches)_type1',
            depth: '7.65 mm (0.30 inch)_type1',
            weight: '238 grams (8.39 ounces)_type1'
        },
        durability: 'Rated IP68 (maximum depth of 6 metres for up to 30 minutes) under IEC standard 60529 (6.33 inches)_type1',
        chipInfo: `A15 Bionic chip\n\nNew 6-core CPU with two performance cores and four efficiency cores\n\nNew 5-core GPU\n\nNew 16-core Neural Engine_type1`
    },
    {
        id: 2,
        name: 'Door Lock Model 2',
        colors: [yellow[800], green[800], blue[500]],
        colorsNames: ['Yellow', 'Green', 'Blue'],
        selectedColor: yellow[800],
        price: 'A$2,199',
        quickLook: {
            displaySize: '6.7"',
            networkType: 'Superfast 4G',
            cameraInfo: `Telephoto\nWide\nCinematic mode in 1080p at 30 fps\nDolby Vision HDR video recording up to 4K at 60 fps_type2`
        },
        sizeAndWeight: {
            height: '160.8 mm (6.33 inches)_type2',
            width: '78.1 mm (3.07 inches)_type2',
            depth: '7.65 mm (0.30 inch)_type2',
            weight: '238 grams (8.39 ounces)_type2'
        },
        durability: 'Rated IP68 (maximum depth of 6 metres for up to 30 minutes) under IEC standard 60529 (6.33 inches)_type2',
        chipInfo: `A15 Bionic chip\n\nNew 6-core CPU with two performance cores and four efficiency cores\n\nNew 5-core GPU\n\nNew 16-core Neural Engine_type2`
    },
    {
        id: 3,
        name: 'Door Lock Model 3',
        colors: [green[800], red[800], blue[500]],
        colorsNames: ['Green', 'Red', 'Blue'],
        selectedColor: green[800],
        price: 'A$1,499',
        quickLook: {
            displaySize: '5.1"',
            networkType: 'Superfast 3G',
            cameraInfo: `Telephoto\nWide\nTelephoto\nCinematic mode in 1080p at 30 fps\nDolby Vision HDR video recording up to 4K at 60 fps_type3`
        },
        sizeAndWeight: {
            height: '160.8 mm (6.33 inches)_type3',
            width: '78.1 mm (3.07 inches)_type3',
            depth: '7.65 mm (0.30 inch)_type3',
            weight: '238 grams (8.39 ounces)_type3'
        },
        durability: 'Rated IP68 (maximum depth of 6 metres for up to 30 minutes) under IEC standard 60529 (6.33 inches)_type3',
        chipInfo: `A15 Bionic chip\n\nNew 6-core CPU with two performance cores and four efficiency cores\n\nNew 5-core GPU\n\nNew 16-core Neural Engine_type3`
    }
]

function Comparison() {
    const [itemOne, setItemOne] = React.useState<any>(DOOR_LOCK_TYPES[0]);
    const [itemTwo, setItemTwo] = React.useState<any>(DOOR_LOCK_TYPES[1]);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [dropdownOneOptions, setDropdownOneOptions] = React.useState<any>([]);
    const [dropdownTwoOptions, setDropdownTwoOptions] = React.useState<any>([]);

    useEffect(() =>{
        console.log('tadaa....');
        const mapDropdown1 = DOOR_LOCK_TYPES.filter((item)=>item.name !== itemTwo.name);
        const mapDropdown2 = DOOR_LOCK_TYPES.filter((item)=>item.name !== itemOne.name);
        setDropdownOneOptions(mapDropdown1);
        setDropdownTwoOptions(mapDropdown2);
    }, [itemOne, itemTwo]);

    const handleChangeItem = (event: SelectChangeEvent, setFunction: Function) => {
        const selectedItem = DOOR_LOCK_TYPES.find((item)=>item.name === event.target.value);
        setFunction(selectedItem);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, item: any, itemSetter: any) => {
        itemSetter({
            ...item,
            selectedColor: event.target.value
        });
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
                    Get help choosing. <span> </span>
                    <Link href="#" underline="hover">Chat with a Specialist {'>'}</Link>
                </Box>
            </Box>

            <Box sx={{ mt: 6 }} display={'flex'}>
                {[{ headerData: itemOne, setItem: setItemOne, dropdownItems: dropdownOneOptions  }, { headerData: itemTwo, setItem: setItemTwo, dropdownItems: dropdownTwoOptions }].map(({headerData, setItem, dropdownItems}: any, index: any)=>(<Box sx={{ width: '50%', height: '100%', p: 1, mx: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{index? 'Item One' : 'Item Two'}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={headerData.name}
                            label={index? 'Item One' : 'Item Two'}
                            onChange={(item)=>handleChangeItem(item, setItem )}>
                            {dropdownItems.map((option: any, index: any) => (
                                <MenuItem key={index} value={option.name}>{option.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Box sx={{ mt: 2 }}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: 500,
                                objectFit: 'contain'
                            }}
                            alt="The house from the offer."
                            src={require("../assets/img/door-lock-1.jpg")}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} pb={5}>
                        {
                            headerData.colors.map((color: string, index: number) => <RadioButton  
                                controlProps={{
                                    value: color,
                                    checked: headerData['selectedColor'] === color,
                                    onChange: (event: any) =>handleChange(event, headerData, setItem),
                                    inputProps: { 
                                        'aria-label': color, 
                                    }
                                }}
                                colorName={headerData.colorsNames[index]}
                                color={color}
                            />)
                        }
                    </Box>
                    <Box sx={{ fontSize: '17px', borderTop: 1, borderColor: 'grey.300', textAlign: 'center', }}>
                        <Box sx={{ fontSize: '17px', marginTop: '20px', fontWeight: 'bold' }}>
                            Starting at {headerData.price}
                        </Box>
                        <Button sx={{ fontSize: '17px', borderRadius: '25px', textTransform: 'capitalize', margin: '20px' }} variant="contained">Buy</Button>
                        <Box >
                            <Link href="#" underline="hover">Learn More {'>'}</Link>
                        </Box>
                    </Box>
                </Box>))}
            </Box>
            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Quick Look </Box>
            <Box display={'flex'}>
                {[itemOne, itemTwo].map((quickLookData)=>(<Box sx={{ width: '50%', height: '100%', p: 1, mx: 1, textAlign: 'center' }}>
                    <Box sx={{ m: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h2">
                            {quickLookData.quickLook.displaySize}
                        </Typography>
                        <Box sx={{ fontWeight: 'bold' }}>
                            Super Retina XDR display with ProMotion <span style={{ verticalAlign: 'super' }}>1</span>
                        </Box>
                    </Box>
                    <Box sx={{ m: 8 }}>
                        <Looks5OutlinedIcon style={{ fontSize: 100 }} />
                        <Box sx={{ fontWeight: 'bold' }}>{quickLookData.quickLook.networkType} <span style={{ verticalAlign: 'super' }}>2</span>
                        </Box>
                    </Box>
                    <Box sx={{ m: 8 }}>
                        <CameraAltOutlinedIcon style={{ fontSize: 100 }} />
                        <Typography sx={{ fontWeight: 'bold', whiteSpace: 'pre-line', lineHeight: 2.5 }}>{quickLookData.quickLook.cameraInfo}</Typography>
                    </Box>
                </Box>))}
            </Box >
            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Size and Weight <span style={{ verticalAlign: 'super' }}>6</span> </Box>
            <Box display={'flex'}>
                {[itemOne.sizeAndWeight, itemTwo.sizeAndWeight].map((sizeAndWeightData)=>(<Box sx={{ width: '50%', height: '100%', p: 1, ml: 3, textAlign: 'left' }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1"> Height </Typography>
                        <Typography>{sizeAndWeightData.height}</Typography>
                        <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Width </Typography>
                        <Typography>{sizeAndWeightData.width}</Typography>
                        <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Depth </Typography>
                        <Typography>{sizeAndWeightData.depth}</Typography>
                        <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="subtitle1"> Weight </Typography>
                        <Typography>{sizeAndWeightData.weight}</Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Splash, Water and Dust Resistance <span style={{ verticalAlign: 'super' }}>4</span> </Box>
            <Box display={'flex'}>
                {[itemOne.durability, itemTwo.durability].map((durabilityText)=>(<Box sx={{ width: '50%', height: '100%', p: 1, mx: 3, textAlign: 'left' }}>
                    <Typography>{durabilityText}</Typography>
                </Box>))}
            </Box>

            <Box sx={{ fontSize: '30px', fontWeight: 'bold', m: 3, py: '20px', borderBottom: 1, borderColor: 'grey.300' }}> Chip </Box>
            <Box display={'flex'}>
                {[itemOne.chipInfo, itemTwo.chipInfo].map((chipText)=>(<Box sx={{ width: '50%', height: '100%', p: 1, ml: 3, textAlign: 'left' }}>
                    <Typography sx={{ mt: 3,  whiteSpace: 'pre-line' }} variant="subtitle1">{chipText}</Typography>
                </Box>))}
            </Box>
        </Box >
    );
}

export default Comparison;
