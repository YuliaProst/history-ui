import {axiosInstance} from '../../axiosInstance/axiosInstance';

export interface TreeInterface {
	id: string;
	children?: TreeInterface[];
	groups?: string[];
}

export const uploadTableApi = {
	uploadTable(bodyFormData: FormData) {
		return axiosInstance('/createTree', {
			method: 'post',
			data: bodyFormData,
			headers: {'Content-Type': 'multipart/form-data' }
		}).then((res: { data: TreeInterface[] }) => res.data);
	},
};
