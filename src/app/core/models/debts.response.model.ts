export interface User {
	id: string;
	email: string;
	password: string;
	name: string;
	createdAt: string;
	updatedAt: string;
}

export interface DebtsResponseModel {
	id: string;
	description: string;
	amount: string;
	status: string;
	createdAt: string;
	updatedAt: string;
	creditor: User;
	debtor: User;
}
