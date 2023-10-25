import * as React from "react";
import { Animated } from "react-native";
export const countPercentage = (value, sum) => {
    if (!sum || !value)
        return 0;
    return (value / sum) * 100;
};
export const convertPercentageString = (percentage) => " " + percentage.toFixed(1) + "%";
export const calculateProgressBarAnimation = ({ percentage, hasBeenVoted, }) => {
    const initialPercentage = hasBeenVoted ? percentage : 0;
    const progress = React.useRef(new Animated.Value(initialPercentage)).current;
    React.useEffect(() => {
        Animated.timing(progress, {
            duration: 1250,
            toValue: percentage,
            useNativeDriver: false,
        }).start();
    }, [percentage]);
    const width = progress.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });
    return { width };
};
//# sourceMappingURL=RNPoll.utils.js.map