export interface IEvent {
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    },
    onlineUrl?: string
    sessions: ISession[]
}

export interface ISession {
    id: number
    name: String
    presenter: String
    duration: number
    level: String
    abstract: String
    voters: String[]
}