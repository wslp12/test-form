export const signInIdValidatoer = (id: string): SignInIdResponse => {
	if (id.length < 3) {
		return {
			success: false,
			type: 'length',
		};
	}

	return {
		success: true,
		type: 'success',
	};
};

export const signInNameValidatoer = (name: string): SignInNameResponse => {
	if (name.length < 3) {
		return {
			success: false,
			type: 'length',
		};
	}

	return {
		success: true,
		type: 'success',
	};
};

export const singInSubmitValidatoer = (formData: {
	id: string;
	name: string;
}): SignInSubmitResponse => {
	if (!formData.id && !formData.name) {
		return {
			success: false,
			type: 'empty',
		};
	}

	if (!formData.id) {
		return {
			success: false,
			type: 'id',
		};
	}

	if (!formData.name) {
		return {
			success: false,
			type: 'name',
		};
	}

	if (formData.id.length < 3) {
		return {
			success: false,
			type: 'id',
		};
	}

	if (formData.name.length < 3) {
		return {
			success: false,
			type: 'name',
		};
	}

	return {
		success: true,
		type: 'success',
	};
};
