import * as React from "react";
import { TextStyle, ImageStyle, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { IRNBounceableProps } from "@freakycoder/react-native-bounceable";
export interface IRNPollItemProps extends IRNBounceableProps {
    pollId: number;
    text: string;
    onPress: () => void;
    percentage: number;
    hasBeenVoted: boolean;
    disabled?: boolean;
    borderColor?: string;
    votedChoiceByID?: number;
    fillBackgroundColor?: string;
    checkMarkIconImageSource?: ImageSourcePropType;
    pollItemContainerStyle?: StyleProp<ViewStyle>;
    choiceTextStyle?: StyleProp<TextStyle>;
    percentageTextStyle?: StyleProp<TextStyle>;
    checkMarkImageStyle?: StyleProp<ImageStyle>;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    selectedChoiceBorderWidth?: number;
    defaultChoiceBorderWidth?: number;
    ImageComponent?: any;
    PollItemContainer?: any;
    renderIcon?(): JSX.Element;
}
declare const RNPollItem: React.FC<IRNPollItemProps>;
export default RNPollItem;
