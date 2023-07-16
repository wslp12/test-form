type SignInIdResponse = {
	success: boolean;
	type: Exclude<IdErrorProps, 'init'>;
};

type SignInNameResponse = {
	success: boolean;
	type: Exclude<NameErrorProps, 'init'>;
};

type SignInSubmitResponse = {
	success: boolean;
	type: Exclude<SubmitErrorProps, 'init'>;
};
