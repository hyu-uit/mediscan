import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 3;
const PADDING = ITEM_HEIGHT; // Top/bottom padding to center first/last items

interface IntervalColumnProps {
  data: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export function IntervalColumn({
  data,
  selectedValue,
  onValueChange,
}: IntervalColumnProps) {
  const flatListRef = useRef<FlatList>(null);
  const [internalValue, setInternalValue] = useState(selectedValue);

  // Sync internal value with external selected value
  useEffect(() => {
    setInternalValue(selectedValue);
    const index = data.indexOf(selectedValue);
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: index * ITEM_HEIGHT,
        animated: false,
      });
    }
  }, [selectedValue, data]);

  const handleMomentumScrollEnd = useCallback(
    (event: any) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const index = Math.round(offsetY / ITEM_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(index, data.length - 1));
      const newValue = data[clampedIndex];

      setInternalValue(newValue);
      onValueChange(newValue);
    },
    [data, onValueChange]
  );

  const handleScrollEndDrag = useCallback(
    (event: any) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const index = Math.round(offsetY / ITEM_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(index, data.length - 1));

      flatListRef.current?.scrollToOffset({
        offset: clampedIndex * ITEM_HEIGHT,
        animated: true,
      });
    },
    [data]
  );

  const renderItem = useCallback(
    ({ item }: { item: string }) => {
      const isSelected = item === internalValue;

      return (
        <View
          style={{ height: ITEM_HEIGHT }}
          className="items-center justify-center"
        >
          <Text
            className={`text-xl font-poppins-semibold ${
              isSelected
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-300 dark:text-neutral-600"
            }`}
          >
            {item}
          </Text>
        </View>
      );
    },
    [internalValue]
  );

  // getItemLayout must account for the header padding
  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: PADDING + ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const initialIndex = data.indexOf(selectedValue);

  return (
    <View
      style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
      className="overflow-hidden"
    >
      {/* Selection highlight - in the middle */}
      <View
        className="absolute left-0 right-0 bg-primary-bright/10 rounded-xl"
        style={{
          top: ITEM_HEIGHT,
          height: ITEM_HEIGHT,
        }}
        pointerEvents="none"
      />

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        getItemLayout={getItemLayout}
        ListHeaderComponent={<View style={{ height: PADDING }} />}
        ListFooterComponent={<View style={{ height: PADDING }} />}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScrollEndDrag={handleScrollEndDrag}
        contentOffset={{ x: 0, y: Math.max(0, initialIndex) * ITEM_HEIGHT }}
      />
    </View>
  );
}
