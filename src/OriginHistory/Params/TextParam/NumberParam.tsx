import {TextField} from '@mui/material';
import * as React from 'react';
import {ChangeEvent, useState} from 'react';

export const NumberParam = () => {

	const [numberValue, setNumberValue] = useState<number>();

	const onChangeNumberValue = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
	};

	return <TextField value={numberValue} onChange={onChangeNumberValue}  placeholder={''} />;
};
