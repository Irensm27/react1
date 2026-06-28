export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ISupport {
    url: string;
    text: string;
}

export interface ICta {
    label: string;
    url: string;
}

export interface IMeta {
    powered_by: string;
    docs_url: string;
    upgrade_url: string;
    example_url: string;
    variant: string;
    message: string;
    cta: ICta;
    context: string;
}

export interface IUsersReqResInResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: ISupport;
    _meta: IMeta;
}