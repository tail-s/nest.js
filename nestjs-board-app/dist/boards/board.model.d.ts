export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}
export declare enum BoardStatus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
