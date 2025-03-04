import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function BasicTabs({ pages, page, setPage }) {
    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    const tabs = pages.map(page => (
        <Tab label={page} value={page} />
    ));

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={page}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor='inherit'
                    indicatorColor='secondary'
                >
                    {tabs}
                </Tabs>
            </Box>
        </Box>
    );
}
