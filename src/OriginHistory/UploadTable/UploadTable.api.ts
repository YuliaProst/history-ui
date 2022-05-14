import {axiosInstance} from '../../axiosInstance/axiosInstance';

export interface TreeInterface {
	id: string;
	children?: TreeInterface[];
	groups?: string[];
}

const mockData: TreeInterface[] = [{
	'groups': ['Соф-1285', 'Соф-1262', 'Вол-560', 'Вол-519', 'Юд-1', 'Тр-793', 'КБ-4', 'Кр-45', 'Пог-834', 'Ув-482', 'КС-81', 'F.II.251', 'Зонар', 'Еп-384', 'Хлуд-79', 'Лук-1', 'Вол-523'],
	'id': '0',
	'children': [{
		'groups': ['Тр-192', 'Сол-803'],
		'id': '1',
		'children': [{
			'groups': ['Сол-858'],
			'id': '4',
		}]
	},]
}, {
	'groups': ['СПБДА-129'],
	'id': '2',
}, {
	'groups': ['Маз', 'Мус'],
	'id': '3',
	'children': [{
		'groups': ['Сол-890'],
		'id': '5',
	}]
}];

export const uploadTableApi = {
	uploadTable(bodyFormData: FormData) {
		return axiosInstance('/createTree', {
			method: 'post',
			data: bodyFormData,
			headers: {'Content-Type': 'multipart/form-data' }
		}).then((res: { data: TreeInterface[] }) => res.data);
	},
};
