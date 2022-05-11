import * as React from 'react';
import {useState} from 'react';

import {UploadTable} from './UploadTable/UploadTable';
import {uploadTableApi} from './UploadTable/UploadTable.api';

export const OriginHistory = () => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccessLoaded, setIsSuccessLoaded] = useState<boolean>(false);

	const [tableData, setTableData] = useState();

	const onUploadTable = async (file: File) => {
		setIsLoading(true);
		setIsSuccessLoaded(false);
		setIsError(false);
		try {
			const bodyFormData = new FormData();
			bodyFormData.append('dict', file);
			setTableData(await uploadTableApi.uploadTable(bodyFormData));
			setIsSuccessLoaded(true);
		} catch {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return <UploadTable onSaveDoc={onUploadTable} isError={isError} isLoading={isLoading} isSuccessLoaded={isSuccessLoaded} />;
};
