import * as React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { ListChildComponentProps, FixedSizeList } from "react-window";

const renderRow = (props: ListChildComponentProps) => {
    const { data, index, style } = props;

    return React.cloneElement(data[index], {
        style,
    });
};

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);

    return <div ref={ref} {...props} {...outerProps} />;
});

export const VirtualizedListbox = React.forwardRef<HTMLDivElement>(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;

    return (
        <div style={{ height: "100%", width: "100%" }} ref={ref}>
            <OuterElementContext.Provider value={other}>
                <AutoSizer>
                    {(size) => (
                        <FixedSizeList
                            {...size}
                            itemData={itemData}
                            outerElementType={OuterElementType}
                            innerElementType="ul"
                            itemSize={53}
                            overscanCount={5}
                            itemCount={itemCount}
                        >
                            {renderRow}
                        </FixedSizeList>
                    )}
                </AutoSizer>
            </OuterElementContext.Provider>
        </div>
    );
});
