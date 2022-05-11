import * as React from 'react';

import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography, styled as materialStyled } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import WarningIcon from '@mui/icons-material/Warning';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styled from '@emotion/styled';

export interface UploadTableProps {
    onSaveDoc?: (file: File) => void;
    isLoading?: boolean;
    isError?: boolean
    isSuccessLoaded?: boolean;
}

const DropZone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #6e6e6e;
  border-style: dashed;
  background-color: #ffffff;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

export const UploadTable = ({ onSaveDoc, isLoading = false, isError = false, isSuccessLoaded = false}: UploadTableProps) => {

	const onDrop = useCallback(acceptedFiles => {
		console.log(acceptedFiles);
	}, []);

	const {acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive} = useDropzone({
		onDrop,
		accept: {
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
		},
		maxFiles: 1
	});

	const acceptedFile = () => {
		if (acceptedFiles.length) return (
			<>
				<Typography>
                    Прикрепленный файл:
				</Typography>
				{acceptedFiles.map(file => (
					<li key={file.name}>
						{file.name}
					</li>
				))}
			</>
		);
		return null;
	};

	const onSaveDocHandler = () => {
		onSaveDoc(acceptedFiles[0]);
	};

	return (
		<Card>
			<CardContent>
				<Grid container direction={'column'} spacing={3}>
					<Grid item>
						<Typography variant="h6">
							{'Загрузка таблицы с разночтениями'}
						</Typography>
					</Grid>
					<Grid item>
						<DropZone {...getRootProps()}>
							<input {...getInputProps()} />
							{
								isDragActive ?
									<p>Перетащите файл сюда...</p> :
									<p>{'Перетащите или выберите файл в формате xlsx'}</p>
							}
						</DropZone>
						<aside>
							{acceptedFile()}
						</aside>
					</Grid>
					<Grid item container direction={'row-reverse'} spacing={3}>
						<Grid item>
							<Button
								onClick={onSaveDocHandler}
								variant="contained"
								color="primary"
								startIcon={<SaveIcon/>}
							>
                                Обработать
							</Button>
						</Grid>
						{isLoading && <Grid item>
							<CircularProgress/>
						</Grid>}
						{isError && <Grid item>
							<WarningIcon fontSize={'large'} color={'error'}/>
						</Grid>}
						{isSuccessLoaded && <Grid item>
							<DoneAllIcon fontSize={'large'} color={'primary'}/>
						</Grid>}
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
