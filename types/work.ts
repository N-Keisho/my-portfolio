export interface Work {
    id: number,
    title: string,
    thubmnail: string,
    created_at: string,
    tag: string[],
    description: string,
    period: string,
    tech:string[],
    links: Link[]
}

export interface Link {
    name: string,
    url: string
}