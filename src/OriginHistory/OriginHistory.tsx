import * as React from 'react';
import {useState} from 'react';

import {Grid} from '@mui/material';

import {UploadTable} from './UploadTable/UploadTable';
import {TreeInterface, uploadTableApi} from './UploadTable/UploadTable.api';
import {Graph} from './Graph/Graph';

export const OriginHistory = () => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccessLoaded, setIsSuccessLoaded] = useState<boolean>(false);

	const [tableData, setTableData] = useState<TreeInterface>({
		id: '$', children: []
	});

	const onUploadTable = async (file: File) => {
		setIsLoading(true);
		setIsSuccessLoaded(false);
		setIsError(false);
		try {
			const bodyFormData = new FormData();
			bodyFormData.append('dict', file);
			setTableData({
				id: '$',
				children: await uploadTableApi.uploadTable(bodyFormData)
			});
			setIsSuccessLoaded(true);
		} catch {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return <Grid container direction={'column'} spacing={3}>
		<Grid item xs={3} spacing={3}>
			<UploadTable onSaveDoc={onUploadTable} isError={isError} isLoading={isLoading} isSuccessLoaded={isSuccessLoaded} />;
		</Grid>
		<Grid item>
			<Graph treeData={tableData} width={1000} height={600}/>
		</Grid>
	</Grid>;
};
