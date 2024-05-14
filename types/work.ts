export interface Work {
    title: string,
    thubmnail: string,
    created_at: string,
    tag: string[],
    discription: string,
    period: string,
    tech:string[],
    links: Link[]
}

export interface Link {
    name: string,
    url: string
}