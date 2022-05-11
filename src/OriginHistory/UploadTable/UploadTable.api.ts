import { axiosInstance } from '../../axiosInstance/axiosInstance';

export const uploadTableApi = {
	uploadTable(bodyFormData: FormData) {
		return axiosInstance('/createTree', {
			method: 'post',
			data: bodyFormData,
			headers: {'Content-Type': 'multipart/form-data' }
		}).then((res: { data: any; }) => res.data);
	},
};
