export interface IBooks {
    id: number;
    name: string;
    pages: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
}
type TUpdateBook = Omit<IBooks, "id" | "createdAt" | "updatedAt">;
export type TUpdatedBook = Partial<TUpdateBook>;