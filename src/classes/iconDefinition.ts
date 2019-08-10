import { Category } from "./category";

export interface IconDefinition {
    categories: Array<Category>
    name: string;
    svgPath: string;
    viewBox: string;
    width: string;
}
