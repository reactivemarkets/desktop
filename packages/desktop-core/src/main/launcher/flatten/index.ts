import { flatten } from "flat";

interface IKeyedObject {
    // tslint:disable-next-line:no-any
    [key: string]: any;
}

export const flattenObject = <T>(object: T, prefix: string, delimiter = "_") => {
    const flattenedObject = flatten<T, IKeyedObject>(object, {
        delimiter,
    });

    return Object
        .keys(flattenedObject)
        .reduce<IKeyedObject>((result, key) => {
            const newKey = `${prefix}_${key}`
                .toUpperCase()
                .replace(" ", delimiter);

            result[newKey] = flattenedObject[key];

            return result;
        },                    {});
};
