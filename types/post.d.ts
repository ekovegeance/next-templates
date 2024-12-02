export interface Post {
    id: string;
    title: string | null | undefined;
    content: string | null | undefined;
    slug: string | null | undefined;
    created: string | null | undefined;
    user: User | null | undefined;
    session: string | null | undefined;
    

}