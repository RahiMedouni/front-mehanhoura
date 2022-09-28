import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';

export default function Langues(ar, fr, en ) {
  const [langues, setLangues] = useState('');

  const handleChange = (e) => {
    setLangues(e.target.value );
  };

  return (

      <FormControl>
        <InputLabel id="demo-simple-select-label">{<LanguageIcon />}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={langues}
          label="itemNo"
          onChange={handleChange}
        >
          <MenuItem value="ar">Arabic</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
      </FormControl>
  );
}
