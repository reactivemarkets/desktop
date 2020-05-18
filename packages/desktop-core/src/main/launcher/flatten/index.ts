import { flatten } from "flat";

interface IKeyedObject {
    [key: string]: string;
}

export const flattenObject = <T>(object: T, prefix: string, delimiter = "_") => {
    const flattenedObject = flatten<T, IKeyedObject>(object, {
        delimiter,
    });

    return Object.keys(flattenedObject).reduce<IKeyedObject>((result, key) => {
        const newKey = `${prefix}_${key}`.toUpperCase().replace(" ", delimiter);

        result[newKey] = String(flattenedObject[key]);

        return result;
    }, {});
};
